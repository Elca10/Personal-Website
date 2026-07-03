#!/usr/bin/env node
// Bass-section photo pipeline: drop a folder named after the show into
// ../media-inbox/bass/<Show Name>, run `npm run add-media`, get a verified,
// permission-fixed site build in ../media-outbox ready to hand off for
// manual SFTP.
//
// A folder name matching an existing collection's title (in
// src/data/bassPhotoCollections.js) appends photos to that collection; any
// other folder name creates a new collection.
//
// Deliberately does NOT process videos (see src/components/
// ProjectTemplate.jsx's isVideo helper for the existing render-side support)
// and never touches the production server itself — SFTP stays manual, on
// purpose.

import { execFileSync, execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const REPO_ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const SITE_ROOT = path.dirname(REPO_ROOT) // ~/Desktop/Coding/PersonalWebsite
const INBOX_DIR = path.join(SITE_ROOT, 'media-inbox', 'bass')
const OUTBOX_DIR = path.join(SITE_ROOT, 'media-outbox')
const IMAGES_ROOT = path.join(REPO_ROOT, 'public', 'images')
const COLLECTIONS_FILE = path.join(REPO_ROOT, 'src', 'data', 'bassPhotoCollections.js')
const DIST_DIR = path.join(REPO_ROOT, 'dist')

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.heic', '.heif'])
const VIDEO_EXTS = new Set(['.mov', '.mp4', '.webm', '.m4v'])
const JUNK_NAMES = new Set(['.DS_Store', '.localized'])

fs.mkdirSync(INBOX_DIR, { recursive: true })

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

function isJunk(filePath) {
  const base = path.basename(filePath)
  return JUNK_NAMES.has(base) || base.startsWith('._')
}

function sanitizeBaseName(name) {
  return name.replace(/[^A-Za-z0-9 ._-]/g, '-')
}

// Load the real, current collections array by importing the module — far
// more reliable than regex-parsing a hand-generated-but-still-JS file.
const { default: collections } = await import(`${pathToFileURL(COLLECTIONS_FILE).href}?t=${Date.now()}`)

let nextCollectionNum = 1
for (const col of collections) {
  const m = col.id.match(/^pc-(\d+)$/)
  if (m) nextCollectionNum = Math.max(nextCollectionNum, Number(m[1]) + 1)
}

// Each pc-N collection's images live in public/images/pcN — derive that
// directly from the id, which is the convention every existing collection
// already follows (including the empty ones, e.g. pc-13 -> pc13).
function imageDirFor(id) {
  const n = id.match(/^pc-(\d+)$/)[1]
  return path.join(IMAGES_ROOT, `pc${n}`)
}

console.log(`Scanning ${INBOX_DIR} ...`)

// Clean out junk files from the inbox first.
for (const f of walk(INBOX_DIR)) {
  if (isJunk(f)) {
    fs.rmSync(f)
    console.log(`  removed junk file: ${path.relative(INBOX_DIR, f)}`)
  }
}

const showDirs = fs
  .readdirSync(INBOX_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory())

const looseFiles = fs
  .readdirSync(INBOX_DIR, { withFileTypes: true })
  .filter((e) => e.isFile() && !isJunk(e.name))

if (looseFiles.length) {
  console.log(`  ignoring ${looseFiles.length} file(s) sitting directly in media-inbox/bass/ — put them in a folder named after the show first: ${looseFiles.map((f) => f.name).join(', ')}`)
}

const summary = [] // { title, id, isNew, added: [], skippedVideos: [], skippedUnknown: [] }

for (const dirEntry of showDirs) {
  const showName = dirEntry.name.trim()
  const showDir = path.join(INBOX_DIR, dirEntry.name)
  const files = walk(showDir).filter((f) => !isJunk(f))

  let collection = collections.find((c) => c.title.trim() === showName)
  const isNew = !collection
  if (!collection) {
    collection = { id: `pc-${nextCollectionNum}`, title: showName, photos: [] }
    nextCollectionNum += 1
    collections.push(collection)
  }

  const targetDir = imageDirFor(collection.id)
  fs.mkdirSync(targetDir, { recursive: true })

  const entry = { title: showName, id: collection.id, isNew, added: [], skippedVideos: [], skippedUnknown: [] }
  summary.push(entry)

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()

    if (VIDEO_EXTS.has(ext)) {
      entry.skippedVideos.push(path.relative(showDir, file))
      continue
    }
    if (!IMAGE_EXTS.has(ext)) {
      entry.skippedUnknown.push(path.relative(showDir, file))
      continue
    }

    // Strip extended attributes/ACLs and normalize permissions before
    // processing — this is exactly the class of "privacy setting" metadata
    // that caused prior deploy trouble.
    try {
      execFileSync('xattr', ['-c', file])
    } catch {
      // no attributes to clear, or xattr unavailable — not fatal
    }
    fs.chmodSync(file, 0o644)

    const baseName = sanitizeBaseName(path.basename(file, path.extname(file)))
    let destName = `${baseName}.jpg`
    let destPath = path.join(targetDir, destName)
    let dupeSuffix = 2
    while (fs.existsSync(destPath) || collection.photos.includes(`/images/${path.basename(targetDir)}/${destName}`)) {
      destName = `${baseName}-${dupeSuffix}.jpg`
      destPath = path.join(targetDir, destName)
      dupeSuffix += 1
    }

    execFileSync('magick', [
      file,
      '-auto-orient',
      '-resize', '2000x2000>',
      '-quality', '85',
      destPath,
    ])
    fs.chmodSync(destPath, 0o644)

    const publicPath = `/images/${path.basename(targetDir)}/${destName}`
    collection.photos.push(publicPath)
    entry.added.push(publicPath)
    fs.rmSync(file)
  }
}

// Regenerate bassPhotoCollections.js: full rewrite, since this file is fully
// owned by this script (never hand-edited the way work.js is).
const collectionsContents = `// Generated/maintained by scripts/add-media.mjs — safe to hand-edit, but new
// shows dropped in media-inbox/bass are added/appended here rather than in
// work.js, so the automation never has to touch hand-authored data.
const bassPhotoCollections = ${JSON.stringify(collections, null, 2)}

export default bassPhotoCollections
`
fs.writeFileSync(COLLECTIONS_FILE, collectionsContents)

// Build is the hard gate — nothing reaches the outbox if it fails.
console.log('\nBuilding site...')
try {
  execSync('npm run build', { cwd: REPO_ROOT, stdio: 'inherit' })
} catch {
  console.error('\nBuild failed — media-outbox was NOT updated. Fix the error above and rerun.')
  process.exit(1)
}

// Lint is informational only — this repo has a pre-existing false-positive
// (no-unused-vars flags `motion` in Home.jsx despite JSX usage) that would
// otherwise block every future run for an unrelated reason.
console.log('\nLint (informational, not blocking):')
try {
  execSync('npm run lint', { cwd: REPO_ROOT, stdio: 'inherit' })
} catch {
  console.log('(lint reported issues above — not blocking the media handoff)')
}

// The actual root cause from a past deploy break: directories need the
// execute bit to be traversable, and Vite's public/ copy ships .DS_Store
// regardless of .gitignore. Fix both on the build output before handoff.
// Two explicit passes (not `chmod -R u=rwX,go=rX`) because some existing
// files in this repo already carry a stray execute bit, which capital-X
// preserves instead of normalizing — harmless for serving, but we want a
// guaranteed-clean 755/644 split, not "probably fine."
execSync(`find "${DIST_DIR}" -name '.DS_Store' -delete`)
execSync(`find "${DIST_DIR}" -type d -exec chmod 755 {} +`)
execSync(`find "${DIST_DIR}" -type f -exec chmod 644 {} +`)

fs.rmSync(OUTBOX_DIR, { recursive: true, force: true })
fs.cpSync(DIST_DIR, OUTBOX_DIR, { recursive: true })

// .DS_Store can get recreated by Finder/Spotlight just from the folder
// being touched — sweep once more on the actual handoff directory.
execSync(`find "${OUTBOX_DIR}" -name '.DS_Store' -delete`)

console.log('\n--- Summary ---')
if (!summary.length) {
  console.log('No show folders found in media-inbox/bass/.')
}
for (const s of summary) {
  const status = s.isNew ? `NEW show (${s.id})` : `matched existing show (${s.id})`
  console.log(`"${s.title}" — ${status}`)
  console.log(`  photos added: ${s.added.length}`)
  if (s.skippedVideos.length) console.log(`  videos skipped (not supported yet, left in place): ${s.skippedVideos.join(', ')}`)
  if (s.skippedUnknown.length) console.log(`  unrecognized files skipped (left in place): ${s.skippedUnknown.join(', ')}`)
}
console.log(`\nBuild: OK`)
console.log(`Ready to SFTP: ${OUTBOX_DIR}`)

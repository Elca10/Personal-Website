# Personal Website (React + Vite)

This repository contains a personal website built with React, Vite, and Tailwind CSS. It is a data-driven site where project and other pages are populated from simple JS data files in `src/data/` and rendered with reusable React components.

## Purpose

This is Eliska Jelinek's personal website. All text, images, and other content in this repository are the property of Eliska unless otherwise noted.

## Tech stack

- React (JSX)
- Vite (dev server + build)
- Tailwind CSS for styling
- framer-motion (optional animations)
- Data files: `src/data/projects.js`, `src/data/other.js`

## Quick start (local)

1. Install dependencies

```bash
npm install
```

2. Start the dev server (hot reload)

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

Notes:
- The project uses Vite; use the scripts in `package.json` for common tasks.
- If you see syntax or lint errors after edits, run the dev server or `npm run build` to locate the failing files.

## Project structure (high level)

- `src/`
	- `components/` — reusable React UI components (Navbar, Footer, ProjectTemplate, Carousel, Lightbox, etc.)
	- `pages/` — route pages (Home, Projects, ProjectPage, Achievements, Other, etc.)
	- `data/` — JS data files that drive displayed content (projects.js, other.js)
	- `images/` — local image assets used by projects and pages
	- `index.css` — global CSS (Tailwind + custom overrides)

## How pages are generated

- Projects are defined in `src/data/projects.js`. Each project has an `id` field; the route `/projects/:id` is handled by `src/pages/ProjectPage.jsx` which loads the matching project and renders `src/components/ProjectTemplate.jsx`.
- The `Other` section is driven by `src/data/other.js` and routed under `/other/*`.

## Editing content

- To add or update a project, edit `src/data/projects.js` and add or modify an object with fields like `id`, `title`, `subtitle`, `description`, `image`, `links`, and `meta`.
- To hide a page without deleting it, remove references to its route or navigation links (e.g., `App.jsx` and `Navbar.jsx`) — the page file can remain in the repo.

## Ownership & copyright

This website and its contents are the personal property of Eliska. Unless explicitly stated otherwise, all content (text, images, designs, and source files) in this repository belongs to Eliska and is not licensed for reuse without permission.

If you want to publish or license any part of this repository under a different license, please coordinate with Eliska and add an appropriate LICENSE file.

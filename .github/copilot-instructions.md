<!-- Copilot / AI Agent instructions for the `my-website` React + Vite portfolio repo -->
# Copilot instructions — my-website

Purpose: quick, actionable guidance so an AI coding agent can be productive immediately in this repo.

1) Big picture
- This is a single-page React site built with Vite (see `package.json` scripts).
- Routing: `src/main.jsx` mounts a `BrowserRouter` and `src/App.jsx` defines routes using `react-router-dom` (examples: `/`, `/projects`, `/projects/:id`, `/achievements`, `/contact`).
- Component layout: top-level layout is provided by `src/components/Navbar.jsx` (fixed nav) and `src/components/Footer.jsx` (page footer). Pages live under `src/pages/` (e.g., `Home.jsx`, `Projects.jsx`, `ProjectPage.jsx`).

2) Build / dev / lint workflows (explicit)
- Start dev server with: npm run dev (uses `vite`).
- Create production build: npm run build (vite build).
- Preview production build locally: npm run preview.
- Linting: npm run lint (ESLint configured via `eslint.config.js`).

3) Project-specific conventions & patterns
- Styling: TailwindCSS v4 is used. Config is in `tailwind.config.js`. Colors and fonts are extended (example: `primary` color and `fontFamily.sans` set to Inter). Use Tailwind utility classes across components; follow existing naming (e.g., `text-primary`, `font-mono`).
- Files: pages are simple React components under `src/pages/`. Reusable UI pieces are in `src/components/` (e.g., `Navbar.jsx`, `ProjectCard.jsx`, `AchievementCard.jsx`). Use these components instead of duplicating markup.
- Routing pattern: Routes are declared in `src/App.jsx` with nested `:id` param for project detail pages. When adding pages, register routes in `App.jsx`.
- Accessibility: navbar uses semantic elements (nav, ul/li). Keep links as `react-router-dom` `Link` components for client-side navigation.

4) Code patterns & examples
- State and UI: small components use local `useState` (see `Navbar.jsx` open state for dropdown). Prefer local state for UI toggles unless data must be shared.
- Animations: repository previously considered `framer-motion` (commented code in `Home.jsx`). If adding animations, keep them optional and lightweight to avoid increasing bundle size.
- ESLint rules: unused variable rule ignores names starting with uppercase or underscore (`eslint.config.js` rule `no-unused-vars` with `varsIgnorePattern: '^[A-Z_]')`). Avoid changing that rule without updating the config.

5) External dependencies & integrations
- Core deps: `react`, `react-dom`, `react-router-dom`, `vite`, `tailwindcss` (see `package.json`). Dev dependencies include ESLint and Vite React plugin.
- No backend or API integrations exist in the repo — keep changes local unless explicitly adding an API. If adding network calls, follow React conventions (hooks, effect cleanup) and add a lightweight wrapper under `src/lib/`.

6) Tests & CI
- There are no tests or CI configs in the repo. Don’t assume tests exist. If adding tests, prefer a minimal setup (Jest or Vitest) and place tests alongside files (e.g., `src/components/Navbar.test.jsx`).

7) Small maintenance rules for AI edits
- Keep edits minimal and focused: small PRs that change one feature or page are preferred.
- Preserve existing CSS/Tailwind tokens (`primary`, `font-mono`, `darkMode: 'class'`), and update `tailwind.config.js` when introducing new design tokens.
- Respect fixed `Navbar` structure: it is positioned `fixed` with `z-50`; changes may affect layout spacing (pages use `pt-24` to offset the nav).

8) Where to look for examples
- Routing and app structure: `src/App.jsx`, `src/main.jsx`.
- Nav patterns and responsive dropdown: `src/components/Navbar.jsx`.
- Page content patterns: `src/pages/Home.jsx`, `src/pages/Projects.jsx`.
- Lint rules: `eslint.config.js`.
- Tailwind tokens and theme extensions: `tailwind.config.js`.

9) When you are unsure
- Run the dev server locally (npm run dev) and open http://localhost:5173 to verify visual/behavioral changes before proposing production changes.
- If a requested change touches global layout (Navbar, fonts, theme), run the app to check spacing and dark-mode behavior.

10) Example quick tasks (how to implement)
- Add a new page: create `src/pages/<Name>.jsx`, export a default React component, and add a `Route` in `src/App.jsx`.
- Add a Tailwind token: update `tailwind.config.js` under `theme.extend.colors`, then use `text-<token>` in components.

If anything here is unclear or you want more/less detail in any section, tell me which part to expand and I will iterate.

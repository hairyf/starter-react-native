# Starter React Native (Expo + Router + NativeWind)

An opinionated React Native starter template built with Expo 54 + Expo Router 6. It includes NativeWind 4, React Query, Valtio, ESLint, and a pnpm workspace (`reusables` package) to help you quickly bootstrap a scalable cross-platform app (iOS / Android / Web).

## Features

- ⚡️ Expo 54 + React Native 0.81 + React 19
- 🧭 File-based routing with Expo Router (including typed routes)
- 🎨 NativeWind + Tailwind CSS v4 (with `reusables` theme and components)
- 📦 pnpm workspace (main app + shared `reusables` UI package)
- 🔄 TanStack Query (data fetching and caching)
- 🗂️ Valtio + `valtio-define` (lightweight state management)
- ✅ TypeScript strict mode + `@antfu/eslint-config`
- 🤖 GitHub Actions CI (`lint` + `typecheck`)
- 🧪 EAS build profiles (`development` / `preview` / `production`)

## Tech Stack

| Area               | Solution                   |
| ------------------ | -------------------------- |
| App framework      | Expo, React Native         |
| Routing            | expo-router                |
| Styling            | nativewind, tailwindcss v4 |
| Data fetching      | @tanstack/react-query      |
| State management   | valtio, valtio-define      |
| Code quality       | TypeScript, ESLint         |
| Package management | pnpm workspace             |
| Build & release    | EAS                        |

## Project Structure

```txt
.
├─ src/
│  ├─ app/                 # Route pages (Expo Router)
│  ├─ components/          # App-level components and Provider
│  ├─ config/              # Runtime config (e.g. QueryClient)
│  └─ store/               # State management
├─ reusables/              # Shared UI components and theme (workspace package)
├─ patches/                # pnpm patchedDependencies (e.g. valtio patch)
├─ app.config.ts           # Expo config
├─ tailwind.config.js      # Tailwind / NativeWind config
├─ metro.config.js         # Metro + NativeWind
├─ eas.json                # EAS build profiles
└─ pnpm-workspace.yaml     # Monorepo workspace
```

## Quick Start

### 1) Prerequisites

- Node.js `>=22` (recommended to match `eas.json`)
- pnpm `>=10`
- iOS / Android simulator (optional)

### 2) Install dependencies

```bash
pnpm install
```

### 3) Start development server

```bash
pnpm dev
```

Run on specific platforms:

```bash
pnpm dev:android
pnpm dev:ios
pnpm dev:web
```

## Available Scripts

```bash
pnpm dev           # Start Expo dev server
pnpm dev:android   # Start and open Android
pnpm dev:ios       # Start and open iOS
pnpm dev:web       # Start Web
pnpm prebuild      # Generate native projects
pnpm typecheck     # Run TypeScript type checks
pnpm lint          # Run ESLint
```

## Development Conventions

- Pre-commit hooks: `simple-git-hooks` + `lint-staged` (runs `eslint --fix`)
- Path aliases:
  - `@/*` -> `src/*`
  - `#/*` -> `reusables/*`
- ESLint ignores `reusables/**` by default (you can lint it separately if needed)

## Setup Checklist (Recommended)

- Update values in `app.config.ts`:
  - `name` / `slug` / `scheme`
  - iOS `bundleIdentifier`
  - Android `package`
- Replace app icon and splash assets (currently `public/icon-light.png` and `public/icon-dark.png`)
- If you plan to release via EAS, fill `extra.eas.projectId` in `app.config.ts`

## CI

Pushes and PRs to `main` automatically run:

- `lint`
- `typecheck`

Workflow file: `.github/workflows/ci.yml`

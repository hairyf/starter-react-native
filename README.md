# React Native Reusables Uniwind Starter

An opinionated React Native starter built with Expo 54 + Expo Router 6, Uniwind (Tailwind CSS v4), and the `reusables` UI package. It is designed as a minimal but scalable foundation for building cross‑platform apps (iOS / Android / Web) with React Native Reusables.

## Features

- ⚡️ **Modern stack**: Expo 54, React Native 0.81, React 19
- 🧭 **File‑based routing** with Expo Router (typed routes enabled)
- 🎨 **Styling** via Uniwind + Tailwind CSS v4 (dark mode ready)
- 📦 **Shared UI package**: `reusables` workspace with shadcn‑style components
- 🔄 **Data fetching** ready with `@tanstack/react-query`
- 🗂️ **State management** ready with `valtio` + `valtio-define`
- ✅ **TypeScript strict** + `@antfu/eslint-config`
- 🧩 **Theming** and navigation integrated via `NAV_THEME` and a `ThemeToggle` header action
- 📱 Runs on **iOS, Android, and Web**

## Tech Stack

| Area               | Solution                             |
| ------------------ | ------------------------------------ |
| App framework      | Expo, React Native                   |
| Routing            | `expo-router`                        |
| Styling            | `uniwind`, `tailwindcss` v4          |
| UI components      | React Native Reusables (`reusables`) |
| Data fetching      | `@tanstack/react-query`              |
| State management   | `valtio`, `valtio-define`            |
| Code quality       | TypeScript, ESLint                   |
| Package management | pnpm workspace (`reusables`)         |

## Project Structure

```txt
.
├─ src/
│  ├─ app/                 # Expo Router routes (+html, _layout, index)
│  ├─ layout/              # Shared layout + ThemeToggle
│  └─ components/          # App-level components (e.g. icons)
├─ reusables/              # Shared UI library (buttons, text, icons, theme)
├─ types/                  # Generated Uniwind type definitions
├─ app.config.ts           # Expo app config (new architecture + edge-to-edge)
├─ metro.config.js         # Metro config with Uniwind integration
├─ tailwind.config.js      # Tailwind / NativeWind content config
├─ pnpm-workspace.yaml     # pnpm workspace configuration
└─ package.json            # Scripts and root dependencies
```

## Quick Start

### 1) Prerequisites

- Node.js `>=22` (recommended)
- pnpm `>=10`
- iOS / Android simulator (optional, for running locally)

### 2) Install dependencies

```bash
pnpm install
```

### 3) Start the development server

```bash
pnpm dev
```

This will start the Expo Dev Server. You can then:

- **iOS**: press `i` to launch the iOS simulator _(macOS only)_
- **Android**: press `a` to launch the Android emulator
- **Web**: press `w` to run in a browser

You can also scan the QR code using the [Expo Go](https://expo.dev/go) app on your device. This project fully supports running in Expo Go for quick testing on physical devices.

## Available Scripts

From the project root:

```bash
pnpm dev           # Start Expo dev server (all platforms)
pnpm dev:android   # Start dev server and open Android
pnpm dev:ios       # Start dev server and open iOS
pnpm dev:web       # Start dev server and open Web
pnpm prebuild      # Generate native iOS/Android projects
pnpm typecheck     # Run TypeScript type checks
pnpm lint          # Run ESLint
pnpm clean         # Remove .expo and node_modules
pnpm reusables     # Manage the reusables workspace UI library
```

## Working with the `reusables` Package

The shared UI library lives in the `reusables` workspace package. To run its maintenance / generation scripts from the project root:

```bash
pnpm reusables
pnpm reusables add
pnpm reusables add  [...components]
```

## Learn More

To dive deeper into the technologies used:

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [Uniwind Docs](https://docs.uniwind.dev/)
- [React Native Reusables](https://reactnativereusables.com)

## Deploy with EAS

The easiest way to deploy your app is with [Expo Application Services (EAS)](https://expo.dev/eas).

- [EAS Build](https://docs.expo.dev/build/introduction/)
- [EAS Updates](https://docs.expo.dev/eas-update/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)

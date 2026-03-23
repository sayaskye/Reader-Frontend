# EpubReader

A modern, high-performance web-based EPUB reader built with React 19 and Vite 7. This project provides a robust environment for managing and reading personal digital libraries with a focus on seamless performance and offline capabilities.

## Introduction

EpubReader allows users to upload, organize, and read EPUB files directly in their browser. It integrates localized and authenticated states for library management, ensuring that your reading progress and bookshelf are consistently managed across sessions.

### Key Characteristics

- **Library Management**: Comprehensive tools to organize, browse, and access EPUB collections.
<!-- - **Offline Reliability**: Leverages IndexedDB for persistent local storage of books and progress, maintaining full functionality without an internet connection. -->
- **Advanced Architecture**: Modular feature-based organization (Auth, Library, Reader) for maintainability and scalability.
<!-- - **PWA Experience**: Optimized as a Progressive Web App for desktop and mobile installation. -->
- **Clean Interface**: A distraction-free reader with settings for customization and progress tracking.

## Technical Foundation

The project utilizes a state-of-the-art frontend stack:

- **Framework**: React 19 (concurrent mode, latest features)
- **Tooling**: Vite 7 with Tailwind CSS 4
- **State**: Zustand (global state) & TanStack Query v5 (server state)
- **Navigation**: React Router v7
- **Persistence**: IndexedDB (via `idb`)
- **UI Components**: Shadcn UI / Radix primitives
- **Utilities**: Axios, Zod, React Hook Form, JSZip, DOMPurify

## Developer Workflow

### Installation

Install the project dependencies using Bun:

```bash
bun install
```

### Development

Run the development server:

```bash
bun run dev
```

### Build

Generate a production-ready optimized build:

```bash
bun run build
```

## Repository Information

This repository is focused on the development of the EpubReader frontend. This project is not intended for public distribution or open-source contribution at this stage.

Backend Repository: https://github.com/sayaskye/Reader-Backend

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format code with Prettier

## Architecture Overview

This is a Next.js 15 portfolio website using the App Router architecture with TypeScript and Tailwind CSS v4.

### Key Architecture Patterns

**App Router Structure**: Uses Next.js App Router with pages organized in `src/app/` directory:
- `/` - Home page with technology spinner animation
- `/projects` - Portfolio projects showcase
- `/experience` - Professional experience
- `/about` - About page
- `/contact` - Contact information

**Component Organization**:
- `src/components/` - Reusable UI components
- `src/lib/utils.ts` - Utility functions (currently contains a simple `cn` class concatenation helper)

**Styling System**:
- Tailwind CSS v4 with PostCSS configuration
- Uses Geist and Geist Mono fonts from Google Fonts
- Custom CSS animations defined in styled-jsx blocks for complex animations

### Technology Stack

- **Framework**: Next.js 15.3.5 with React 19
- **Styling**: Tailwind CSS v4, PostCSS
- **TypeScript**: Configured with path aliases (`@/*` maps to `./src/*`)
- **Analytics**: Vercel Analytics and Speed Insights
- **Components**: Radix UI React Slot for component composition

### Notable Implementation Details

**TechnologySpinner Component**: Complex animated component that displays technology icons moving across predefined paths with CSS keyframe animations. Icons are randomly selected from a predefined array and animated along 6 different diagonal and horizontal paths.

**Navigation**: Global navbar component with links to all main sections, styled with hover effects.

**Asset Structure**:
- Technology icons stored in `/public/assets/icons/`
- Background images in `/public/assets/`

### Development Notes

- Uses `'use client'` directive for client-side interactive components
- Path aliases configured for clean imports (`@/components`, `@/lib`)
- ESLint configured with Next.js and Prettier integration
- No test framework currently configured
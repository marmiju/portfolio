# Personal Portfolio

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. The project follows a modular, component-based architecture and features a data-driven approach to content management.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later recommended)
- npm or yarn

### Installation & Running

1. Clone the repo
   ```sh
   git clone https://github.com/marmiju/portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

All the content of this portfolio (personal information, skills, projects, experiences) is centralized in `public/content/content.ts`. To customize the portfolio, you just need to modify the data in this file. The UI will update automatically.

The data structures are defined in `public/types/Interfaces.ts`.

## Folder Structure

```
.
├── app/
│   ├── components/       # UI components
│   │   ├── sections/     # Section components (About, Skills, etc.)
│   │   └── ...
│   ├── layout.tsx        # Main layout
│   └── page.tsx          # Main page
├── public/
│   ├── content/
│   │   └── content.ts    # Centralized content
│   └── types/
│       └── Interfaces.ts # TypeScript interfaces for content
├── ...
```
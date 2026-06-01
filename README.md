# Mediterraneo in Rosa (MIR)

**Mediterraneo in Rosa (MIR)** is the official showcase website for the "Mediterraneo in Rosa" charity event. It's an all-female rubber boat raid designed to raise funds for **Cuore Rosa** and the **Lorenzo Perrone Association**. 

## ✨ Key Features

- **Edition Timeline**: Dynamic presentation of past raid editions (2022 and 2024), featuring image galleries, charitable impact, and recorded donations.
- **Support & Donations**: Dedicated areas promoting the *Cuore Rosa* initiative and the Lorenzo Perrone Association to raise awareness for oncological prevention.
- **2026 Edition Interactive Map**: A customized screen designed for the upcoming 2026 raid to visualize planned stages on the map, including routes and distances in nautical miles.
- **Modern & Fluid UI/UX**: Scroll reveal effects and smooth transitions built with Tailwind CSS and React hooks for an immersive user experience.
- **Accessible Design System**: Implementation of accessible UI components using Radix UI (shadcn/ui).

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Styling** | Tailwind CSS v4, clsx, tailwind-merge |
| **UI Components** | shadcn/ui, Radix UI Primitives, Lucide React, Embla Carousel |
| **Forms & Validation** | React Hook Form, Zod |
| **Language** | TypeScript |

## 📋 Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js**: v18.17 or higher (v22+ recommended due to React 19).
- **Package Manager**: `npm`.

## 🚀 Installation & Setup

While this is a niche personal project, you can run it locally by following these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LilQuacky/MIR
   cd MIR
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 💻 Usage

To start the application in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. All code modifications in the `app/` or `components/` directories will trigger a Fast Refresh.

## 📜 Available Scripts

The following scripts are configured in `package.json`:

- `npm run dev`: Starts the development server.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the production server (requires `build` to be run first).
- `npm run lint`: Runs ESLint to catch and fix code issues.

## 📁 Folder Structure

The workspace structure follows Next.js App Router conventions:

```text
MIR/
├── app/               # Main routes and Next.js Layouts
│   ├── globals.css    # Global application styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Landing page 
├── components/        # Reusable React components and section layouts
│   ├── ui/            # Generic UI components
│   ├── hero.tsx       # Main intro section
│   ├── chi-siamo.tsx  # History of the editions and mission
│   └── [...]          # Other single-page sections
├── hooks/             # Custom React Hooks 
├── lib/               # Shared utility functions 
├── public/            # Static assets
│   ├── fonts/         # Local fonts
│   ├── logos/         # Partner and brand logos
│   └── mir/           # Images for various editions
└── styles/            # Additional styles
```

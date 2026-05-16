# Radip Shrestha - Personal Website

A modern, responsive personal portfolio built with [Next.js](https://nextjs.org/) and Vanilla CSS modules.

## Features

- **Dark Mode First**: Sleek, glassmorphism-inspired design.
- **GitHub Integration**: Dynamically fetches your public GitHub repositories and displays the most starred ones.
- **Responsive Layout**: Seamlessly adapts from mobile to desktop screens using modern CSS features (`clamp()`, Grid, Flexbox).
- **Zero Configuration Styling**: Built completely with Vanilla CSS Modules, offering maximum flexibility without locking into a specific utility framework.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your GitHub Username:**
   Open `src/app/page.tsx` and change the `GITHUB_USERNAME` variable on line 8 to your actual GitHub username.
   ```typescript
   const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "your-actual-username";
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Customization

- **Styling**: Global styles and custom properties (like colors) are located in `src/app/globals.css`. Component-specific layout styles are in `src/app/page.module.css` and `src/components/ui.module.css`.
- **Content**: Update your bio, experience, and contact links directly in `src/app/page.tsx`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

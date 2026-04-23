# Tobams Group -Frontend Intern Assessment

## Links

- **Live URL** - [https://tobams-six.vercel.app](https://tobams-six.vercel.app)
  **Figma Design** - [https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=fQLkee0WnJCaTIzc-0]

## ⚙️ Setup Steps

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/senatorash/Tobams-assessment.git
cd Tobams-assessment
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## Tech Stack

**Next.js | Tailwind CSS | TypeScript**

## Design Decisions

- **Design System & Theming** - A centralised design was implemented using CSS variables to ensure consistency and easy theme management across the application. It defines the base color tokens in :root, which are then mapped into Tailwind using @theme inline for seamless utility based styling.

- **DRY Principle (Don't Repeat Yourself)** - A core approach in programming which was implemented throughout the codebase. Rather than hardcoding each navigation item individually , all nav links, lists are defined in an array and rendered by mapping over it. This means adding, removing, or updating a nav link only requires a change in one place which is the array and it automatically reflects across both desktop nav row and the mobile menu, keeping the code clean, maintainable and free of duplications.

- **Next.js(App Router)** - Required as part of the assessment stack. The App Router was used for modern file-based routing and server components support.

- **Tailwind CSS** - Required as part of the assessment stack which I used to style and this helps keeps styles consistent across components without needing a separate CSS file per components, speeding up development significantly.

- **Component Structure** - UI is broken into small, reusable components to keep pages clean, readable, and easy to maintain. Each component has a single responsibility.

- **Icons** - React icons was used for icons in the entire application. It is lightweight and it keeps bundle size small while maintaining a consistent visual syle across the UI. I opted for react icons over figma assets because the icon assest provided in the figma file rendered blurry when exported and used directly in the project.

## Known Issues

- **Routing & Button Functionality** - The About page is the primary implemented view, while other navigation links temporarily point to (/) as placeholders. Additionally, buttons are currently UI-only, as no interaction flows were defined in the provided design.

- **Navigation & Dropdowns** - Implemented according to the provided figma design. Dropdown content and interaction were not defined, so visual indicators were added.

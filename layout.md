# Layout Standards

This document defines the layout standards for the WebPage project.

## Page Structure

```
+----------------------------------------------------------+
|                        Header                            |
|  [Logo/Name]                        [Nav Links]         |
+----------------------------------------------------------+
|                                                          |
|                      Hero Section                        |
|              Headline + Subtitle + CTA                   |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|                   Features Section                       |
|   [Card 1]         [Card 2]         [Card 3]            |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|                    About Section                         |
|           Image + Description side-by-side               |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|                   Contact Section                        |
|              Simple contact form / info                  |
|                                                          |
+----------------------------------------------------------+
|                        Footer                            |
|       Links  |  Social Icons  |  Copyright               |
+----------------------------------------------------------+
```

## Layout Rules

### Responsive Breakpoints

| Breakpoint | Width       | Columns | Behavior                  |
|------------|-------------|---------|---------------------------|
| Mobile     | < 640px     | 1       | Stack all content          |
| Tablet     | 640–1024px  | 2       | Side-by-side where useful  |
| Desktop    | > 1024px    | 3       | Full multi-column layout   |

### Spacing

- **Page max-width:** Full width, no arbitrary max-width constraint
- **Section padding:** `py-16 px-4` (mobile), `py-20 px-8` (desktop)
- **Content max-width:** `max-w-7xl mx-auto` for centered content blocks
- **Card gap:** `gap-6` (mobile), `gap-8` (desktop)
- **Element spacing:** Use Tailwind spacing scale only (no arbitrary values)

### Typography

| Element      | Size Class          | Weight      | Color            |
|--------------|---------------------|-------------|------------------|
| Page title   | `text-4xl md:text-6xl` | `font-bold` | `text-gray-900`  |
| Section head | `text-3xl md:text-4xl` | `font-bold` | `text-gray-900`  |
| Subtitle     | `text-lg md:text-xl`   | `font-normal` | `text-gray-600` |
| Body text    | `text-base`            | `font-normal` | `text-gray-700` |
| Nav links    | `text-sm`              | `font-medium` | `text-gray-700` |
| Footer text  | `text-sm`              | `font-normal` | `text-gray-400` |

### Colors

| Purpose        | Tailwind Class        |
|----------------|-----------------------|
| Primary        | `bg-blue-600`         |
| Primary hover  | `hover:bg-blue-700`   |
| Background     | `bg-white`            |
| Alt background | `bg-gray-50`          |
| Text primary   | `text-gray-900`       |
| Text secondary | `text-gray-600`       |
| Border         | `border-gray-200`     |

### Components

- **Header:** Fixed top, white background, subtle shadow (`shadow-sm`), full width
- **Cards:** Rounded corners (`rounded-xl`), subtle shadow (`shadow-md`), white background, padding `p-6`
- **Buttons:** Rounded (`rounded-lg`), padding `px-6 py-3`, primary color, hover state
- **Images:** Rounded (`rounded-xl`), object-cover, responsive width
- **Sections:** Alternate between white and `bg-gray-50` backgrounds

### Accessibility

- All images must have descriptive `alt` text
- Interactive elements must have focus-visible styles
- Minimum contrast ratio: 4.5:1 for text
- Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`)

## Running the App

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework:** React 18+ with TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

# AGENT.md

AI Development Guidelines for this repository.

This project is a **personal portfolio website for a Full Stack Software Engineer** built using **Next.js**.  
The site showcases projects, experience, blog posts, and provides contact functionality.

AI coding agents must follow the guidelines below when reading, modifying, or generating code in this repository.

---

# 1. Agent Role

You are acting as a **senior full-stack engineer** contributing to this project.

Your goals:

- Maintain clean and maintainable code
- Follow the existing architecture
- Prefer simple solutions
- Avoid unnecessary dependencies
- Keep performance and accessibility in mind

This is a **production-grade personal website**, not an experimental playground.

---

# 2. Thinking Process

Before writing any code:

1. Read the relevant files
2. Understand the current structure
3. Follow existing patterns
4. Design the solution
5. Implement minimal required changes

Avoid large rewrites unless explicitly requested.

---

# 3. Tech Stack

Core framework:

- **Next.js (App Router)**
- **React**
- **TypeScript**

Styling:

- **TailwindCSS**

Internationalization:

- **next-intl** or **next-i18next**

Deployment:

- **Vercel**

Package manager:

- **pnpm**

---

# 4. Recommended Dependencies

Agents may use these packages when appropriate.

### UI / Styling

- tailwindcss
- clsx
- tailwind-merge

### Animation

- framer-motion

### Icons

- lucide-react

### Markdown / Blog

- gray-matter
- remark
- rehype

### Forms

- react-hook-form
- zod

### Email

- resend or nodemailer

### Analytics

- vercel analytics
- plausible

### i18n

- next-intl or next-i18next

### SEO

- next-seo

Agents should **avoid introducing additional libraries unless necessary**.

---

# 5. Project Goals

This website should include:

- Hero section
- About section
- Projects showcase
- Blog section
- Contact form
- Resume / experience
- Internationalization support

The site should be:

- fast
- accessible
- SEO optimized
- mobile responsive

---

# 6. Project Structure

Agents should follow this structure.

Guidelines:

- **components/ui** → reusable UI components
- **components/sections** → landing page sections
- **lib** → shared utilities and logic
- **content** → markdown content for blog/projects

---

# 7. Coding Principles

Follow these rules:

### Simplicity

Prefer the simplest implementation.

### Readability

Code must be easily understandable.

### Reusability

Reusable components should live in `/components`.

### Type Safety

Use TypeScript types whenever possible.

### Accessibility

Ensure proper semantic HTML and ARIA support.

---

# 8. Component Guidelines

React components should:

- be small and focused
- use clear props
- avoid unnecessary state
- prefer server components when possible

Use **client components only when required**.

Example:

should only appear when needed.

---

# 9. Styling Rules

Styling uses **TailwindCSS**.

Rules:

- avoid inline styles
- use utility classes
- extract reusable components when styles repeat
- prefer responsive design

---

# 10. Internationalization

The site supports multiple languages.

Agents must:

- avoid hardcoded text
- place translations in locale files

Example:

Text should be retrieved via the i18n library.

---

# 11. SEO Rules

Ensure each page includes:

- metadata
- open graph tags
- proper heading hierarchy

Use Next.js metadata API.

---

# 12. Performance

Prefer:

- Server Components
- Static Generation
- Image optimization with `next/image`

Avoid:

- unnecessary client JS
- large dependencies

---

# 13. Blog System

Blog posts should be stored in:

Use markdown or MDX.

Each post should include:

---

# 14. Project Showcase

Projects should be stored in:

Each project should include:

- title
- description
- tech stack
- github link
- demo link
- images

---

# 15. Contact Form

Contact form should:

- validate inputs
- prevent spam
- send email via API route

Possible integrations:

- Resend
- Nodemailer
- Server action

---

# 16. Security

Agents must ensure:

- no secrets in client code
- environment variables stored in `.env`
- input validation for forms

---

# 17. Performance Guidelines

The website should aim for:

- Lighthouse score > 90
- minimal JavaScript
- optimized images
- fast loading times

---

# 18. When Adding Features

Follow this process:

1. Locate relevant module
2. Extend existing patterns
3. Avoid duplication
4. Keep code modular
5. Add types

---

# 19. When Refactoring

Refactor only if:

- improves clarity
- removes duplication
- improves architecture

Avoid unnecessary refactors.

---

# 20. Communication Style

When responding:

- Explain briefly what was changed
- Mention affected files
- Provide clear code examples

Example:

Changed files:

- `components/sections/Hero.tsx`
- `app/[locale]/page.tsx`

Reason:

Improved hero layout and added i18n support.

---

# 21. Definition of Done

A task is complete when:

- Code compiles
- Lint passes
- Types are valid
- Page renders correctly
- Mobile responsive
- Translations added
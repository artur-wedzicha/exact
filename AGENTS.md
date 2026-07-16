# AI Guidelines

These rules apply to future AI-assisted changes in this project.

## Styling

- Prefer Tailwind utility classes for component-level styling whenever possible.
- Avoid adding or expanding local component CSS files unless Tailwind is clearly insufficient.
- Prefer project color variables over ad hoc Tailwind color opacity utilities like `text-white/72`, `border-white/10`, or similar when the value represents a reusable design token.
- If a needed color state does not exist as a token, add or request an explicit CSS variable instead of encoding the visual value inline in component classes.
- Do not use inline arbitrary color values such as `text-[rgba(...)]`, `bg-[rgba(...)]`, or similar for product UI colors. If the needed color does not exist, add a CSS variable first and then use that variable in Tailwind.
- Do not use Tailwind `font-black`. Prefer `font-extrabold` or the shared typography styles unless a stronger weight is explicitly required and agreed.
- Use standalone CSS only for cases like:
  - global styles
  - resets
  - third-party overrides
  - animations or patterns that are genuinely awkward in Tailwind

## Typography

- Use the shared `Typography` component for text content whenever practical.
- Do not replace semantic text blocks with raw HTML elements if `Typography` already fits the case.
- If a heading should react to design tokens like `--font-h1`, use the matching `Typography` variant instead of overriding it with unrelated local sizing.

## Components

- Keep component-specific layout and spacing close to the component in JSX via Tailwind classes.
- Only introduce custom class names when they add real clarity or support a case Tailwind does not express well.
- Keep `className` readable. Avoid long conditional class chains for simple layout details like separators, borders, or spacing when a simpler Tailwind structure or a small helper would be clearer.

## Feedback Loop

- If the user points out a code quality issue, preference, or implementation standard, add it to these notes when it should apply to future work in the project.
- Treat repeated user feedback about code quality as a project convention, not a one-off comment.

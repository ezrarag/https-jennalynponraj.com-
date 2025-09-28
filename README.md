# Jennalyn Ponraj - Personal Website

A sophisticated, high-fashion personal website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Dark Theme**: Elegant black background with white text and subtle accents
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Smooth Animations**: Refined animations using Framer Motion
- **Modern Typography**: Combination of Inter (sans-serif) and Playfair Display (serif)
- **Modular Components**: Easy to maintain and customize

## Sections

1. **Hero Section**: Full-width hero with placeholder image and headline overlay
2. **Featured Works**: Grid of clickable video cards with hover animations
3. **Music Links**: Spotify and Apple Music integration buttons
4. **Bio Section**: Full biography with elegant typography
5. **Gallery**: Grid of image placeholders with scroll animations
6. **Contact**: Contact form and social media links

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Google Fonts**: Inter and Playfair Display

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Deploy with zero configuration

## Customization

### Adding Real Images
Replace the placeholder images in the components with actual images:
- Hero section: Update the background image in `HeroSection.tsx`
- Gallery: Add real images to the gallery items in `Gallery.tsx`
- Featured Works: Add thumbnail images for each work in `FeaturedWorks.tsx`

### Updating Links
Update the placeholder links in:
- `FeaturedWorks.tsx`: Add real links to video projects
- `MusicLinks.tsx`: Add real Spotify and Apple Music links
- `ContactSection.tsx`: Add real social media links and email

### Styling
The design uses Tailwind CSS classes and can be customized by:
- Modifying colors in `tailwind.config.ts`
- Updating component styles in individual component files
- Adjusting animations in Framer Motion configurations

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navigation.tsx
    ├── HeroSection.tsx
    ├── FeaturedWorks.tsx
    ├── MusicLinks.tsx
    ├── BioSection.tsx
    ├── Gallery.tsx
    └── ContactSection.tsx
```

## License

This project is created for Jennalyn Ponraj's personal use.
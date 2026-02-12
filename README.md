# AI Notes Summarizer

An intelligent note-taking application that uses Google's Gemini AI to generate summaries and flashcards from uploaded notes.

## Features

- 📝 Upload text files and generate AI-powered summaries
- 🎴 Create flashcards for study
- 📅 Study planner
- 🔐 Firebase authentication (Login/Register)
- ⚡ Built with Next.js 15 and Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributors

### Abhinandana
- Created upload page functionality
- Designed layout and global CSS styling
- Developed flashcard components

### Rashmi
- Implemented login and register functionality
- Integrated Firebase Authentication

### Pallavi
- Integrated Google Gemini 2.5 Flash API for summary generation
- Implemented API configuration and model selection
- Fixed API integration issues

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### Continuous Integration
- Every push to `main` branch and pull request triggers the CI workflow
- Runs linting, builds the project, and ensures everything works correctly

### Deployment Options

#### GitHub Pages
The project is configured for automatic deployment to GitHub Pages:
- The deployment workflow runs on pushes to the `main` branch
- Static files are built and published to GitHub Pages
- Visit the deployed site at https://username.github.io/portfolio (replace 'username' with your GitHub username)

#### Manual Deployment
You can also manually deploy to GitHub Pages:

```bash
npm run deploy
```

#### Vercel (Alternative)
Alternatively, you can set up deployment on Vercel by:
1. Connecting your GitHub repository to Vercel
2. Configuring the deployment settings
3. Uncommenting the Vercel deployment section in `.github/workflows/ci-cd.yml`
4. Adding the required secrets to your GitHub repository

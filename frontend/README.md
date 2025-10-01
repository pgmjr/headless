# BrickMods Frontend (Next.js)

This is the **Next.js frontend application** for the BrickMods project. It serves as the UI layer, fetching content from both a **Headless WordPress CMS** and a **custom backend API** using REST and GraphQL.

The project is modern, performant, and modular—engineered for real-world content-driven apps, e-commerce, or SaaS platforms.

---

## Features

- React 18 with Next.js 14
- Tailwind CSS 3 for utility-first styling
- SWR and Axios for efficient data fetching and caching
- Headless WordPress integration via REST and GraphQL
- JWT and Sanctum authentication support
- Internationalization (i18n) with locale files
- Subresource Integrity (SRI) generation via Webpack plugin
- SEO enhancements via `next-seo` and `next-sitemap`
- Testing with Jest
- Typed with TypeScript
- Optimized images with Sharp

---

## Directory Context

This `README.md` belongs to the `./frontend/` folder and documents the frontend application only.

---

## Getting Started

1. Install dependencies:
   ```bash
   make install
   ```

2. Start development server:
   ```bash
   make dev
   ```
   The app will be available at [`http://localhost:3000`](http://localhost:3000) or as defined in `.env.local`.

3. Build the app:
   ```bash
   make build
   ```

4. Start the production server:
   ```bash
   make start
   ```

---

## Makefile Commands

| Command         | Description                                      |
|-----------------|--------------------------------------------------|
| `make install`  | Install dependencies (`npm install`)             |
| `make dev`      | Run in development mode                          |
| `make build`    | Build for production                             |
| `make start`    | Start production server                          |
| `make lint`     | Run ESLint for static analysis                   |
| `make format`   | Auto-format code using Prettier                  |
| `make test`     | Run tests with Jest                              |
| `make clean`    | Remove `node_modules` and `.next` folders        |
| `make postbuild`| Generate SRI hashes using `webpack-subresource-integrity` |
| `make help`     | Display all available Makefile commands          |

Tip: Run `make help` to see all tasks with descriptions.

---

## Environment Variables (`.env.local`)

| Variable                                 | Description                                              |
|------------------------------------------|----------------------------------------------------------|
| `NEXT_PUBLIC_SITE_NAME`                 | Public-facing name of the site                           |
| `NEXT_PUBLIC_BASE_URL`                  | Base URL of frontend                                     |
| `NEXT_PUBLIC_WORDPRESS_API_URL`         | WordPress REST API URL                                   |
| `NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT`| WordPress GraphQL endpoint (WPGraphQL)                   |
| `NEXT_PUBLIC_WORDPRESS_URL`             | Headless WordPress frontend URL                          |
| `NEXT_PUBLIC_WORDPRESS_PREVIEW_SECRET`  | Secret token for enabling preview mode                   |
| `NEXT_PUBLIC_API_URL`                   | Backend API URL                                          |
| `NEXT_PUBLIC_SANCTUM_CSRF_COOKIE`       | Sanctum CSRF cookie endpoint                             |
| `NEXT_PUBLIC_JWT_LOGIN_ENDPOINT`        | JWT login endpoint                                       |
| `NEXT_PUBLIC_JWT_REGISTER_ENDPOINT`     | JWT register endpoint                                    |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`       | (Optional) Google Analytics tracking ID                  |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`        | (Optional) Google reCAPTCHA Site Key                     |
| `NEXT_PUBLIC_ENABLE_PREVIEW`            | Toggle preview mode (`true` / `false`)                   |
| `NEXT_PUBLIC_FEATURE_FLAG`              | Custom feature flag (e.g., `beta-feature`)               |
| `NEXT_PUBLIC_I18N_DEFAULT_LOCALE`       | Default language (`en`)                                  |
| `NEXT_PUBLIC_I18N_SUPPORTED_LOCALES`    | Comma-separated list of supported languages              |
| `NEXT_PUBLIC_I18N_LOCALE_PATH`          | Path to locale JSON files                                |

---

## Tooling and Dev Stack

### Dependencies
- `next`
- `react`, `react-dom`
- `swr`
- `axios`
- `classnames`
- `html-react-parser`
- `sharp`

### Dev and Build Tools
- TypeScript
- Tailwind CSS
- ESLint and Prettier
- Jest
- PostCSS and Autoprefixer
- Webpack Subresource Integrity

---

## Scripts Summary

You can also run these scripts directly from `package.json`:

```bash
# Lint, format, test
npm run lint
npm run format
npm run test

# Build and generate SRI hashes
npm run build
node scripts/generate-sri.js
```

---

## Docker and Backend Context

- The frontend runs locally
- The CMS (WordPress) and backend API typically run in Docker containers
- API Endpoints expected:
  - WordPress REST: `http://localhost:8080/wp-json`
  - WordPress GraphQL: `http://localhost:8080/graphql`
  - Backend API: `http://localhost:8000/api`

---

## NOTES:

For more information related to Next.js refer to [`/NEXT.md`](./NEXT.md)


---

## Author and Maintainer

Developed by **PGMJr**  
Full Stack WordPress & SEO Developer

[`Go Back to root README.md`](../README.md)

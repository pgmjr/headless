# BrickMods Backend (Laravel)

This is the **Laravel backend API** for the BrickMods project. It acts as the middle layer between the frontend (Next.js) and the CMS (Headless WordPress), handling:

- JWT-based authentication
- GraphQL API support
- CORS and secure headers
- Media file uploads
- External service integrations (Stripe, PayPal, etc.)

This backend is designed to support a **headless architecture** using WordPress and Laravel APIs, working seamlessly with modern frontend frameworks.

---

## Requirements

- PHP 8.1+
- Composer
- MySQL (or compatible database)
- Laravel 10+
- Docker (for supporting services like DB, CMS)

---

## Getting Started

1. **Copy `.env` and generate app key:**
   ```bash
   make env
   ```

2. **Install dependencies:**
   ```bash
   make install
   ```

3. **Run migrations and seed database:**
   ```bash
   make migrate
   make seed
   ```

4. **Start Laravel server:**
   ```bash
   make serve
   ```
   App will be served at [http://localhost:8000](http://localhost:8000) by default.

---

## ⚠️ Environment Configuration

After running `make env`, **you must configure your `.env` file manually** based on your environment (local, staging, production).

Below is a breakdown of important variables grouped by purpose:

### Database Configuration

| Variable       | Description                 |
|----------------|-----------------------------|
| `DB_HOST`      | Database host               |
| `DB_PORT`      | Database port               |
| `DB_DATABASE`  | Database name               |
| `DB_USERNAME`  | Database username           |
| `DB_PASSWORD`  | Database password           |

### App Settings

| Variable       | Description                         |
|----------------|-------------------------------------|
| `APP_NAME`     | Application name                    |
| `APP_ENV`      | Environment (`local`, `production`) |
| `APP_KEY`      | Laravel encryption key              |
| `APP_DEBUG`    | Enable debug mode (`true/false`)    |
| `APP_URL`      | App base URL                        |

### Authentication (JWT / Sanctum)

| Variable                 | Description                              |
|--------------------------|------------------------------------------|
| `JWT_SECRET`             | JWT secret key                           |
| `JWT_SECRET_KEY`         | (Optional alias, same as above)          |
| `JWT_TTL`                | Access token time-to-live (in minutes)   |
| `JWT_REFRESH_TTL`        | Refresh token TTL                        |
| `SANCTUM_STATEFUL_DOMAINS` | Domains considered "stateful"         |
| `SANCTUM_CSRF_COOKIE_NAME` | CSRF cookie name for Sanctum          |

### Mail Configuration

| Variable           | Description                     |
|--------------------|---------------------------------|
| `MAIL_MAILER`      | Mail driver (`smtp`, `log`, etc.) |
| `MAIL_HOST`        | SMTP server                     |
| `MAIL_PORT`        | SMTP port                       |
| `MAIL_USERNAME`    | SMTP username                   |
| `MAIL_PASSWORD`    | SMTP password                   |
| `MAIL_ENCRYPTION`  | Encryption method (`tls`, `ssl`) |
| `MAIL_FROM_ADDRESS`| Sender email address            |
| `MAIL_FROM_NAME`   | Sender name                     |

### Redis (Optional)

| Variable       | Description           |
|----------------|-----------------------|
| `REDIS_HOST`   | Redis host            |
| `REDIS_PORT`   | Redis port            |
| `REDIS_PASSWORD`| Redis password       |
| `REDIS_DB`     | Redis DB index        |

### API / Rate Limiting

| Variable           | Description                    |
|--------------------|--------------------------------|
| `API_RATE_LIMIT`   | Max requests per minute        |
| `API_TOKEN_NAME`   | Token name for personal access |
| `API_SECRET_KEY`   | Optional custom API key        |

### External Services (Optional)

| Service     | Variables (example)                              |
|-------------|--------------------------------------------------|
| HubSpot     | `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_GUID`, `HUBSPOT_API_KEY` |
| Stripe      | `STRIPE_PUBLIC_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` |
| PayPal      | `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_MODE` |
| GCash       | `GCASH_MERCHANT_ID`, `GCASH_PUBLIC_KEY`, `GCASH_PRIVATE_KEY` |
| Maya        | `MAYA_PUBLIC_KEY`, `MAYA_SECRET_KEY`, `MAYA_API_URL` |

### WordPress Integration

| Variable                       | Description                          |
|--------------------------------|--------------------------------------|
| `WORDPRESS_URL`                | Headless WordPress URL               |
| `WORDPRESS_API_URL`           | WordPress REST API base              |
| `WORDPRESS_GRAPHQL_ENDPOINT`  | WPGraphQL endpoint                   |
| `WORDPRESS_PREVIEW_SECRET`    | Secret used to enable preview mode   |

---

## Quick Setup Commands

Basic setup:
```bash
make setup
```

Full headless-ready setup (includes all core extensions):
```bash
make setup-headless
```

---

## Makefile Commands

| Command                        | Description                                                  |
|--------------------------------|--------------------------------------------------------------|
| `make install`                | Install dependencies via Composer                            |
| `make setup`                  | Create `.env`, install, migrate, and seed                    |
| `make env`                    | Generate `.env` and app key                                  |
| `make serve`                  | Serve app on host:port (`APP_HOSTNAME`, `APP_PORT`)          |
| `make migrate`                | Run Laravel migrations                                       |
| `make migrate-fresh`          | Drop and re-run all migrations                               |
| `make seed`                   | Seed the database                                            |
| `make reset-db`               | Migrate fresh and seed                                       |
| `make cache-clear`            | Clear Laravel caches (config, routes, views, app)            |
| `make optimize`               | Optimize Laravel config/cache                                |
| `make test`                   | Run unit and feature tests                                   |
| `make test-coverage`         | Run tests with code coverage output                         |
| `make install-headless-extensions` | Install JWT, GraphQL, Secure Headers, CORS, Media Library |
| `make setup-headless`         | Full headless-ready setup                                    |
| `make help`                   | Show all available commands                                  |

---

## Headless Extensions Included

Running `make install-headless-extensions` installs:

- `tymon/jwt-auth` for JWT authentication
- `nuwave/lighthouse` for GraphQL APIs
- `fruitcake/laravel-cors` for CORS handling
- `bepsvpt/secure-headers` for HTTP security headers
- `spatie/laravel-medialibrary` for media upload and storage

Each extension publishes its config automatically. Be sure to review and modify them as needed.

---

## Service Integration Overview

| Layer        | Technology     | Role                           |
|--------------|----------------|--------------------------------|
| Frontend     | Next.js        | UI rendering & user interaction|
| Backend API  | Laravel        | Auth, GraphQL, DB logic        |
| CMS          | WordPress (WPGraphQL, REST) | Content management         |
| Database     | MySQL / MariaDB| Persistent data storage        |

---

---

## NOTES:

For more information related to LARAVEL refer to [`/LARAVEL.md`](./LARAVEL.md)


---

## Author & Maintainer

Developed by **PGMJR**  
Full Stack WordPress & SEO Developer


[`Go Back to root README.md`](../README.md)

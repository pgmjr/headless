# BrickMods

A modular, scalable, and blazing-fast website builder built on a full **Jamstack architecture**—combining Headless WordPress, Laravel API, and Next.js (React + TypeScript). Optimized for developers, it enables rapid site development with reusable components, multilingual support, eCommerce readiness, and mobile-first performance. Build SEO-friendly, accessible websites using flexible layout blocks and customizable UI bricks.

---

## Why I build this?

I built this to create a repeatable and efficient process for building websites—one that is faster, more modular, and easier to maintain. The goal is to streamline development by offering ready-made, reusable components that can be easily customized and integrated into any page or post. This approach not only saves time but also promotes consistency, scalability, and flexibility across projects.

---

## Why use this?

BrickMods is built to solve the pain points of modern web development with a modular, scalable, and blazing-fast architecture. Whether you're a developer, a business owner, or a project manager, here's why BrickMods is the right choice:

### For Developers:
- Rapid Development with reusable, customizable components
- Built with Next.js (React + TypeScript) for performance and DX
- Headless WordPress for flexible content management
- Laravel API layer for custom logic, authentication, and secure backend operations
- Modular by design — every piece is cleanly separated and composable
- Jamstack-ready: API-driven, scalable, and CDN-friendly

### For Business Owners:
- Faster time-to-market with pre-built UI “bricks” and templates
- Multilingual support and eCommerce readiness out of the box
- Built with SEO, performance, and accessibility in mind
- Scales with your business—from startup sites to large content platforms
- Easy content updates via WordPress without developer involvement

### For Project Managers:
- Clear separation of concerns for easier team collaboration (Frontend, CMS, Backend)
- Reusable blocks mean fewer regressions and more consistency
- Headless CMS enables faster content workflows and marketing flexibility
- Strong testing, version control, and deployment foundations
- Reduces technical debt through a well-structured, future-ready stack

---

## Table of Contents

* [Core Dependencies & Versions](#core-dependencies--versions)
* [Project Structure Overview](#project-structure-overview)
* [Quick Setup (Local & Docker)](#quick-setup-local--docker)
* [The Big Picture: Our Architecture](#the-big-picture-our-architecture)
* [Stack Overview](#stack-overview)
* [Why These Technologies?](#why-these-technologies)
* [How the Pieces Interact](#how-the-pieces-interact)
* [Troubleshooting & Common Pitfalls](#troubleshooting--common-pitfalls)
* [What's Next?](#whats-next)
* [Makefile Commands (Cross-platform Compatible)](#makefile-commands-cross-platform-compatible)

---

## Core Dependencies & Versions

Before diving into installation, here’s a breakdown of the essential global dependencies this project requires. These are either installed via `make install` or can be manually installed.

  | Dependency | Recommended Version | Platform Support | Manual Installation Command |
  |---|---|---|---|
  | **Apache** | 2.4+ | macOS, Linux, WSL2 | `brew install httpd` / `sudo apt install apache2` |
  | **PHP** | 8.2.x | macOS, Linux, WSL2 | `brew install php@8.2` / `sudo apt install php8.2` |
  | **Composer** | 2.x | Cross-platform | `curl -sS https://getcomposer.org/installer | php` |
  | **Node.js (via NVM)** | 22.x LTS | Cross-platform | `nvm install 18` |
  | **Docker + Compose** | Latest stable | Cross-platform | https://docs.docker.com/get-docker |
  | **WP-CLI (optional)** | Latest | macOS, Linux | `curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar` |
  | **Oh My Zsh (optional)** | Latest | macOS, Linux, WSL2 | `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |


> These dependencies ensure smooth local development across macOS, Linux, and WSL2, promoting consistency and fewer compatibility issues within your team.

---

## Project Structure Overview

This project is organized into three main directories, each representing a core part of the decoupled Headless Stack.

```
/
├── .ideas/ # Your personal space
├── .backups/ # Your local backups
├── backend/ # The Laravel API
├── frontend/ # The Next.js application
└── cms/ # The Headless WordPress CMS (the content hub)
```

This structure clearly separates the different layers of the application, making it easy to navigate and understand the project at a glance.

---

## Quick Setup (Local & Docker)

To get the core infrastructure services (database, phpMyAdmin, etc.) up and running, you'll use Docker Compose. The main application stacks (WordPress, Laravel, and Next.js) will be installed and run directly on your local machine.

1.  Copy the `.env.example` files to `.env` in the `backend`, `frontend`, and `cms` directories.
2.  From the project root, run the following command to start the Docker services:

```bash
docker-compose up -d
```

3.  Once the Docker services are running, follow the installation instructions in each directory’s `README.md` to set up the local applications.

---

## The Big Picture: Our Architecture

This project uses a **decoupled, three-part architecture**:

### Headless WordPress (CMS)

The **central content hub**. Editors manage posts, pages, and custom content using the WordPress dashboard. Content is exposed via **GraphQL** (WPGraphQL plugin) for headless consumption.

### Laravel API (Backend)

Handles complex business logic, integrations, and secure functionality. Acts as a **custom logic layer** for:

* Secure user authentication (JWT-based)
* Custom forms, processing, and workflows
* Third-party API integrations
* Ecommerce and transactional logic

### Next.js (Frontend)

The user-facing React application. Pulls structured content from WordPress and dynamic logic/data from Laravel using both GraphQL and REST endpoints. Supports **SSR**, **SSG**, **ISR**, and **CSR** for performance optimization and content freshness.

---

## Stack Overview

### Apache + PHP 8.2 (LTS Stack)

Used for WordPress and Laravel. This reflects a realistic production environment with benefits such as:

* Accurate production mirror
* Stable LTS with known behavior and compatibility
* Easier debugging and parity with shared hosting
* Widely supported PHP extensions
* Improved interoperability between WordPress and Laravel
* Avoids port conflict issues with Nginx on local setups
* Reduced learning curve for dev teams familiar with Apache

---

## Why These Technologies?

### Next.js (Frontend)

Chosen for:

* Mobile-first development with React
* Server-Side Rendering (SSR) + Static Generation (SSG)
* Incremental Static Regeneration (ISR)
* Enhanced SEO, Core Web Vitals
* Utility-first styling with Tailwind CSS
* Strong TypeScript support

### Headless WordPress (CMS)

Chosen for:

* Content creators use familiar UI
* Fast modeling with CPT, ACF, Taxonomies
* Flexible content via GraphQL (WPGraphQL)
* Avoids traditional theme bloat
* Great for marketing/editorial teams

### Laravel API (Backend)

Chosen for:

* Clean MVC structure
* Strong community and ecosystem
* Ideal for secure, logic-heavy functionality
* Simple JWT Auth integration
* Extensible, testable, and robust

### Jamstack Architecture

Chosen for:

* Pre-rendering ensures speed and security
* Global CDN hosting
* Reduced infrastructure complexity
* Works well with decoupled CMS and microservices

---

## How the Pieces Interact

1.  User requests a page via **Next.js**.
2.  Next.js fetches content via **GraphQL** from **WordPress**.
3.  If needed, Next.js queries **Laravel** for dynamic/custom data.
4.  Laravel validates the request (e.g. via JWT) and responds with the data.
5.  Next.js merges and renders the full HTML page.

> For real-time or uncached data, we rely on **SSR** to ensure freshness and avoid stale content issues when using cache or SSG.

---

## Default URLs

These are the default local development URLs for the project.

They assume you are running the environment using the provided configuration files (e.g., Docker Compose, Makefile, or local server scripts).  

- **WordPress** (`http://localhost:8080`)  
  The headless WordPress CMS instance. Use this to manage content, plugins, and site settings.  
  This URL exposes both the WordPress admin dashboard and the REST/GraphQL API endpoints.

- **Frontend** (`http://localhost:3000`)  
  The decoupled frontend application (e.g., Next.js, React, or similar).
  This consumes the WordPress API for rendering pages. Draft previews and live content will be accessible here.

- **Backend** (`http://localhost:8000`)  
  The backend API service (if applicable).  
  This could be a Node.js/Express server, Laravel API, or any other service that integrates with WordPress or the frontend.

- **PHPMyAdmin** (`http://localhost:8081`)  
  A web-based database management interface for MySQL/MariaDB.  
  Use this to inspect and manage your WordPress database directly.

---

## Docker Compose Setup

This project includes a Docker Compose configuration that spins up the necessary services for local development and testing.  
All services use environment variables defined in the `.env` file, making it easy to adjust credentials, ports, and project names.

### Services Overview

#### 1. Database (`db`)
- **Image:** `mariadb:10.6`
- **Purpose:** Provides the MySQL-compatible database backend for WordPress and other connected services.
- **Environment Variables:**
  - `MYSQL_ROOT_PASSWORD` – Root user password.
  - `MYSQL_DATABASE` – Default database to create on container start.
  - `MYSQL_USER` / `MYSQL_PASSWORD` – Non-root user credentials.
- **Ports:**
  - `${DB_PORT}:3306` → Maps local machine port to the container’s MySQL port.
- **Persistence:** By default, data will persist in Docker volumes (configure in `docker-compose.override.yml` or volumes section).

#### 2. phpMyAdmin (`phpmyadmin`)
- **Image:** `phpmyadmin:5.2.1`
- **Purpose:** Web-based UI for managing the MariaDB database.
- **Environment Variables:**
  - `PMA_HOST` – Database hostname (usually the `db` service).
  - `PMA_PORT` – Database port (defaults to `3306`).
  - `MYSQL_ROOT_PASSWORD` – Root credentials for database access.
- **Ports:**
  - `${PHPMYADMIN_PORT}:80` → Maps local port to the phpMyAdmin web interface.
- **Dependencies:** Waits for the `db` service to be available before starting.

#### 3. Redis (`redis`)
- **Image:** `redis:7`
- **Purpose:** In-memory data store used for caching and session management (useful for WordPress object caching plugins).
- **Ports:**
  - `${REDIS_PORT}:6379` → Maps local port to Redis’ default port.
- **Restart Policy:** `unless-stopped` to ensure service resilience.

---

### How It Works Together
- **WordPress** (running locally or in another container) connects to **MariaDB** for data storage.
- **phpMyAdmin** connects to the same MariaDB instance for database administration.
- **Redis** can be used by WordPress or backend services to store cache, improving performance in development and production.

---

### Starting the Services
To start the stack, run:
```bash
docker-compose up -d
```

### Stopping the Services
To stop and remove containers (without removing volumes/data):
```bash
docker-compose down
```

### Rebuilding Services
If you change environment variables or Dockerfiles:
```bash
docker-compose up -d --build
```



---

## Troubleshooting & Common Pitfalls

### Where to Look When Something Breaks

This project uses **Headless WordPress CMS** + **Next.js (React + TypeScript)** + **Laravel**.  
When something breaks, start with the layer that’s failing, then trace upward/downward.

---

#### **1. Frontend Errors** (blank screen, missing data, GraphQL errors)
- **First checks:**
  - Open browser **DevTools Console** → look for JavaScript errors or failed imports.
  - Open **Network tab** → inspect failed GraphQL/REST requests (status codes, CORS errors).
- **Common causes:**
  - Incorrect GraphQL endpoint in `.env`.
  - WordPress or Laravel backend not running.
  - Type errors in TypeScript after new schema changes.
- **Extra tips:**
  - Run the frontend in dev mode for better error traces:
    ```bash
    npm run dev
    ```
  - Check Next.js server logs in the terminal where it’s running.

---

#### **2. Backend API Errors** (`404`, `500`, validation errors)
- **Check Laravel logs:**
  ```bash
  tail -f backend/storage/logs/laravel.log
  ```
- **Verify routes:**
  ```bash
  php artisan route:list
  ```


- **Common causes:**
  - Missing API routes after a deployment or migration.
  - Middleware (e.g., Sanctum/JWT) blocking requests.
  - Incorrect `.env` values for DB or API keys.

---

#### **3. CMS Issues** (missing fields, invalid GraphQL schema, data not updating)
- **Check inside WordPress admin:**
  - Custom Post Types (CPT) registered?
  - Advanced Custom Fields (ACF) fields assigned to correct post types?
- **Test the GraphQL endpoint**:
  - Using [Altair GraphQL Client](https://altairgraphql.dev/) or built-in GraphiQL.
  - Verify new fields appear after updating schema-related plugins.
- **Common causes:**
  - WPGraphQL or ACF plugin disabled.
  - ACF field groups not set to “Show in GraphQL”.
  - JWT authentication issues blocking private data.

---

#### **4. Environment Variable Issues** (values not being applied)
- **Check that `.env` files are:**
  - Valid syntax (no stray spaces or hidden characters).
  - Loaded by the correct process (frontend, backend, CMS each have their own `.env`).
  - Consistent across local, staging, and production.
- **Clear caches after changes:**
  - Laravel:  
    ```bash
    php artisan config:clear && php artisan cache:clear
    ```
  - Next.js: stop and restart the dev server.
  - WordPress: clear object cache (if Redis or cache plugin is used).

---

#### Quick Debug Flow
1. **Is the service running?**
2. **Are `.env` values correct and loaded?**
3. **Any errors in logs or browser console?**
4. **Can the endpoint be reached directly (e.g., GraphQL URL in browser)?**

### Common Pitfalls

- **Caching Confusion**:  
  When using SSG, content updates may not appear instantly.  
  Use **SSR** fallback or **revalidate paths** if real-time updates are needed.

- **Environment Mismatches**:  
  Confirm that `.env` settings for API URLs, `APP_KEY`, and DB credentials match between environments.

- **Don’t Overuse WordPress**:  
  Avoid pushing complex logic into WordPress.  
  Offload to Laravel where possible.

- **Global Dependency Corruption**:  
  If global tools like PHP, Apache, or NVM fail, run:

```bash
make restart
```

    This reinstalls global dependencies **without affecting project code**.

* **Danger: Docker Reset**: If absolutely needed, reset Docker and all containers:

```bash
make docker-reset
```

**Warning**: This will remove all containers, volumes, and database data.

---

## What's Next?

1.  Read individual stack READMEs for local setup:
    * [`/cms`](./cms/README.md) — Headless WordPress CMS
    * [`/frontend`](./frontend/README.md) — Next.js + React + Tailwind + TypeScript
    * [`/backend`](./backend/README.md) — Laravel API
2.  Contact the maintainer for onboarding access or secrets.

---

## Makefile Commands (Cross-platform Compatible)

| Command | Description |
|---|---|
| `make install` | Installs all global dependencies (PHP, Apache, etc.) |
| `make setup` | Bootstraps Docker containers and initial configs |
| `make reset` | Reinstalls global dependencies (non-destructive) |
| `make docker-reset` | **Deletes** all Docker containers, volumes, DBs |
| `make start-cms` | Serve WordPress to localhost:8080
| `make start-frontend` | Serve Frontend to localhost:3000
| `make start-backend` | Serve Backend to localhost:8000

> All scripts include validation and success/failure feedback messages.

### If you configure Apache to connect CMS, Frontend, & Backend

| Command | Description |
|---|---|
| `make start` | Start Apache server (only if you configure the apache)
| `make stop` | Stop Apache server
| `make restart` | Restart Apache server

---

## Author and Maintainer

Developed by **PGMJr**  
Full Stack WordPress & SEO Developer

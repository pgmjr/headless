# Headless WordPress CMS

This directory contains a **Headless WordPress** instance, configured to serve content via the REST API or GraphQL for consumption by a decoupled frontend.  
The CMS runs inside Docker, with environment variables and database connection details defined in `docker-compose.yml` and `.env`.

---

## Directory Structure

```
cms/
│
├── vendor/                  # Composer dependencies
├── wp-content/              # Custom themes, plugins, & media uploads
│   ├── plugins/
│   └── themes/
│   └── uploads/
├── .env                     # Environment variables for WordPress & MySQL
├── composer.json            # Composer configuration and package definitions
├── composer.lock            # Exact versions of installed packages (lockfile)
├── docker-compose.yml       # Docker services & WordPress configuration
└── makefile                 # Make Command: install & builds the project
```

---

## Environment Variables

The `.env` file stores configuration for WordPress and MySQL.  

**Example `.env` file:**
```
# Database
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cms
DB_USERNAME=admin
DB_PASSWORD=pass1234
DB_TABLE_PREFIX=wp_

# Site
WORDPRESS_URL=http://localhost:8000
```

> For more details on how these are used in WordPress (`wp-config.php`), refer to **`docker-compose.yml`**.

---

## Installation

From the **project root**:

- **Full Installation** (Core dependencies, CMS, Frontend, Backend):  
  ```
  make unattend
  ```

- **Core Dependencies Only** (Will install core dependencies):
  ```
  make install
  ```

- **CMS Only** (WordPress into `cms/` directory):  
  ```
  make cms
  ```

From the **cms** directory:

- **Full Installation** (CMS, WP-CLI, Plugins):  
  ```
  make install
  ```

- **Plugins Installation** (WP-CLI, Plugins): 
  ```
  make plugins
  ```

- **Other Commands**: 
  ```
  make help
  ```


---

## Serving WordPress Locally

To start the CMS:

- From the **project root**:  
  ```
  make start-cms
  ```

- Or from inside the **cms/** directory:  
  ```
  make start
  ```

---

## Access WordPress

- **Frontend:** [http://localhost:3000](http://localhost:8000)  
- **Admin:** [http://localhost:8000/wp-admin](http://localhost:8000/wp-admin)

---

## API Endpoints

- **REST API:**  
  ```
  http://localhost:8080/wp-json
  ```

- **GraphQL (if WPGraphQL installed):**  
  ```
  http://localhost:8080/graphql
  ```

- **Backend API:**  
  ```
  http://localhost:8000/
  ```

---

## Database Access

To connect locally with a database client:
```
Host: DB_HOST from .env
Port: DB_PORT from .env
DB Name: DB_DATABASE from .env
User: DB_USERNAME from .env
Password: DB_PASSWORD from .env
```

---

## Architecture Overview

### Frontend to CMS to Database:

**Use Case: Simple Headless CMS Site**

Example: A blog or marketing website powered by Headless WordPress, where the frontend (like Next.js or Vue) fetches content via REST or GraphQL (e.g., WPGraphQL) from the CMS.

**Scenario:**
- The frontend app fetches content directly from the CMS API (e.g., /wp-json/wp/v2/posts or /graphql).
- CMS manages content only (pages, posts, media).
- No backend business logic or custom processing is needed.

```
[ Frontend App ]  <--->  [ CMS API ]  <--->  [ Database ]
       ↑                      ↑                    ↑
       |                      |                    |
Consumes REST / GraphQL  Runs in Local Env    Runs in Docker
```

### Frontend to Backend / Cache to Database:

**Use Case: Custom Web Application or SaaS**

Example: A user dashboard, admin panel, or SaaS app where the frontend interacts with a custom backend (Node.js, Laravel, etc.) for authentication, business logic, and direct DB access.

**Scenario:**
- Frontend sends requests to a backend (e.g., /api/orders, /api/login).
- Backend handles data validation, caching (e.g., Redis), auth, and talks to the database.
- CMS not involved — the app is custom-built.

```
[ Frontend App ]  <--->  [ Backend API ]  <--->  [ Database ]
       ↑                        ↑                     ↑
       |                        |                     |
Consumes REST / GraphQL  Runs in Local Env       Runs in Docker
```

### Frontend to Backend / Cache to CMS to Database

**Use Case: Advanced Headless CMS with Custom Logic**

Example: A content-driven platform (e.g., e-learning, e-commerce, membership site, marketplace) where content is managed in WordPress, but custom backend logic (auth, user roles, caching, transformations) is handled by a separate backend layer.

***Scenario:***

- The frontend requests data via the backend.
- Backend fetches, transforms, or filters CMS data (possibly from WordPress REST or GraphQL API).
- Backend may also add caching or auth before returning to frontend.
- CMS talks to its database (via WP core or plugins).

```
[ Frontend App ]  <--->  [ Backend API / Cache ]  <--->  [ CMS API ]  <--->  [ Database ]
         ↑                          ↑                         ↑                   ↑
         |                          |                         |                   |
Consumes REST / GraphQL     Runs in Local Env         Runs in Local Env     Runs in Docker
```

---

## Notes

- This CMS is **headless** — all theming is disabled or irrelevant.
- Content is served via API to a separate frontend project.
- Refer to `docker-compose.yml` for how `wp-config.php` is configured via environment variables.

## Author and Maintainer

Developed by **PGMJr**  
Full Stack WordPress & SEO Developer


[`Go Back to root README.md`](../README.md)

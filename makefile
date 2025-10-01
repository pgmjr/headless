# Makefile (Root)

# Load .env variables
include .env
export

OS := $(shell uname)
CURRENT_USER := $(shell whoami)
STATUS := false

.PHONY: install docker cms frontend backend restart docker-reset start-cms start-frontent start-backend help permission cms-env frontend-env backend-env test

help:
	@echo "Usage:"
	@echo "  make unattend       # Install everything unattended (macOS/Linux/WSL2)"
	@echo "  make install        # Install global dependencies (macOS/Linux/WSL2)"
	@echo "  make docker         # Start Docker services + create DBs"
	@echo "  make cms            # Install Headless WordPress CMS"
	@echo "  make frontend       # Install Next.js as Web Frontend"
	@echo "  make backend        # Install Laravel as Backend Middleware"
	@echo "  make restart        # Reinstall global dependencies (Apache, PHP, Composer, Node, etc.)"
	@echo "  make docker-reset   # WARNING: Remove Docker containers, volumes, and networks"

install:
	@echo "Detected OS: $(OS)"
	@if [ "$(OS)" = "Darwin" ]; then \
		bash ./scripts/install-mac.sh && echo "(macOS)  Global dependencies install completed." || echo "macOS install failed."; \
	elif [ "$(OS)" = "Linux" ]; then \
		bash ./scripts/install-linux.sh && echo "(Linux) Global dependencies install completed." || echo "Linux install failed."; \
	else \
		echo "Unsupported OS: $(OS)"; \
	fi

docker:
	@echo "Starting Docker services..."
	@docker compose pull && docker compose up -d
	@echo "Waiting for MySQL to be ready..."
	@until docker exec ${COMPOSE_PROJECT_NAME}_db mysqladmin ping -h"${DB_HOST}" --silent; do \
		echo "  MySQL is not ready yet..."; \
		sleep 3; \
	done
	@echo "MySQL is ready!"
	@echo "Creating WordPress database and user if not exists..."
	@docker exec ${COMPOSE_PROJECT_NAME}_db \
		sh -c "mysql -u root -p${MYSQL_ROOT_PASSWORD} -e \"CREATE DATABASE IF NOT EXISTS ${DB_DATABASE}; \
		GRANT ALL PRIVILEGES ON ${DB_DATABASE}.* TO '${DB_USERNAME}'@'%' IDENTIFIED BY '${DB_PASSWORD}'; \
		FLUSH PRIVILEGES;\""
	@echo "Creating Laravel database and user if not exists..."
	@docker exec ${COMPOSE_PROJECT_NAME}_db \
		sh -c "mysql -u root -p${MYSQL_ROOT_PASSWORD} -e \"CREATE DATABASE IF NOT EXISTS ${DB_NAME_LARAVEL}; \
		GRANT ALL PRIVILEGES ON ${DB_NAME_LARAVEL}.* TO '${DB_USER_LARAVEL}'@'%' IDENTIFIED BY '${DB_PASSWORD_LARAVEL}'; \
		FLUSH PRIVILEGES;\""
	@echo
	@echo "Docker environment is ready!"
	@echo "------------------------------------"

restart:
	@echo "Reinstalling global dependencies (excluding Docker)..."
	@if [ "$(OS)" = "Darwin" ]; then \
		bash ./scripts/restart-mac.sh && echo "macOS restart complete." || echo "macOS restart failed."; \
	elif [ "$(OS)" = "Linux" ]; then \
		bash ./scripts/restart-linux.sh && echo "Linux restart complete." || echo "Linux restart failed."; \
	else \
		echo "Unsupported OS: $(OS)"; \
	fi

cms: permission
	rm -rf cms && sleep 3
	@mkdir -p cms && sleep 1 && cd cms && \
	composer require vlucas/phpdotenv && \
	node scripts/sync-env.js cms && \
	curl -O https://wordpress.org/latest.tar.gz && \
	tar -xzf latest.tar.gz && \
	mv wordpress/* . && rm -rf wordpress latest.tar.gz && \
	composer require vlucas/phpdotenv && \
	cp ../wp-config.php wp-config.php && \
	wp core install --url="$(WORDPRESS_URL)$(if $(WORDPRESS_PORT),:$(WORDPRESS_PORT))" --title="CMS" \
			--admin_user=${WP_ADMIN_USER} --admin_password=${WP_ADMIN_PASS} --admin_email=${WP_ADMIN_EMAIL} 
	wp plugin install wp-graphql wp-graphql-acf acf --activate	

frontend: permission frontend-env
	rm -rf frontend && sleep 3
	@mkdir -p frontend && sleep 1 && cd frontend && sleep 1 && \
	composer require vlucas/phpdotenv && \
	cp ../.shared/package.json.frontend package.json
	npm install && \
	npx tailwindcss init -p && \
	node scripts/sync-env.js frontend && \
	mkdir scripts && \
	cp ../scripts/generate-sri.js scripts/generate-sri.js
	@echo "Frontend runs at $(FRONTEND_PROTOCOL)://$(FRONTEND_HOSTNAME):$(FRONTEND_PORT)"

backend: permission
	rm -rf backend && sleep 3
	composer create-project laravel/laravel backend && \
	cd backend && rm .env.example && \
	node scripts/sync-env.js backend && \
	sleep 3 && php artisan key:generate

docker-reset:
	@echo "WARNING: This will stop and remove all Docker containers, volumes, and networks."
	@read -p "Are you sure you want to continue? This will DELETE your local database. (y/N): " confirm; \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		docker compose down -v --remove-orphans && \
		echo "Docker reset complete." || \
		echo "Docker reset failed."; \
	else \
		echo "Cancelled: Docker reset aborted."; \
	fi

unattend:
# $(MAKE) install &&
	@$(MAKE) docker && \
	$(MAKE) cms && \
	$(MAKE) frontend && \
	$(MAKE) backend
	@echo "------------------------------------"
	@echo "Frontend:  $(FRONTEND_URL):$(FRONTEND_PORT)"
	@echo "Backend:   $(BACKEND_URL):$(BACKEND_PORT)"
	@echo "WordPress: $(WORDPRESS_URL):$(WORDPRESS_PORT)"
	@echo "phpMyAdmin: http://$(FRONTEND_HOSTNAME):$(PHPMYADMIN_PORT)"
	@echo "Redis:     redis://$(REDIS_HOST):$(REDIS_PORT)"
	@echo "------------------------------------"

permission:
	@echo
	@echo "Resolving permission issue for $(CURRENT_USER)"
	@sudo chown -R $(CURRENT_USER):$(CURRENT_USER) .
	@sudo chown -R $(CURRENT_USER):$(CURRENT_USER) .git
	@echo "Completed successfully!"

start-cms:
	cd cms && php -S ${WORDPRESS_HOSTNAME}:${WORDPRESS_PORT} -t .

start-frontend:
	cd frontend && rm -rf .next && \
	sleep 3
	cd frontend && \
	npm run build && npm run start

start-backend:
	@cd backend && php artisan serve --host=${BACKEND_HOSTNAME} --port=${BACKEND_PORT}

# Laravel Makefile for Headless WordPress + Next.js
# ================================================
# Load host and port from .env if it exists, otherwise use defaults
ifneq (,$(wildcard .env))
    include .env
    export
endif

HOST ?= $(or $(APP_HOSTNAME),127.0.0.1)
PORT ?= $(or $(APP_PORT),8000)

help: ## Show this help message with all available commands
	@echo ""
	@echo "Laravel Makefile for Headless WordPress + Next.js"
	@echo "-------------------------------------------------"
	@echo "Usage: make [command]"
	@echo ""
	@awk '\
		/^# [-]+/ { print ""; next } \
		/^# / { \
			section = substr($$0, 3); \
			if (section != "") print section ":"; \
			next \
		} \
		/^[a-zA-Z0-9_-]+:.*?## / { \
			split($$0, parts, "## "); \
			cmd = parts[1]; gsub(/:.*/, "", cmd); \
			printf "  \033[36m%-25s\033[0m %s\n", cmd, parts[2] \
		} \
	' $(MAKEFILE_LIST)
	@echo ""
	@echo "Tip: You can run 'make <command>' to execute a task."


.PHONY: install setup env serve migrate migrate-fresh seed reset-db cache-clear optimize test test-coverage \
        install-headless-extensions setup-headless help

# -----------------------
# Core Installation Tasks
# -----------------------
install: ## Install PHP dependencies via Composer
	composer install

setup: ## Create .env, install dependencies, run migrations & seeds
	make env
	make install
	make migrate
	make seed

env: ## Create .env file with defaults and generate app key
	@if [ ! -f .env ]; then \
		cp .env.example .env && \
		echo "APP_HOSTNAME=127.0.0.1" >> .env && \
		echo "APP_PORT=8000" >> .env && \
		php artisan key:generate; \
	else \
		echo ".env already exists, skipping creation."; \
	fi

serve: ## Serve Laravel app using host/port from .env or defaults
	@echo "Serving Laravel at http://$(HOST):$(PORT)"
	php artisan serve --host=$(HOST) --port=$(PORT)

# -----------------------
# Database Commands
# -----------------------
migrate: ## Run database migrations
	php artisan migrate

migrate-fresh: ## Drop all tables and re-run migrations
	php artisan migrate:fresh

seed: ## Seed the database
	php artisan db:seed

reset-db: ## Fresh migrate and seed
	php artisan migrate:fresh --seed

# -----------------------
# Cache & Optimization
# -----------------------
cache-clear: ## Clear Laravel caches
	php artisan cache:clear
	php artisan config:clear
	php artisan route:clear
	php artisan view:clear

optimize: ## Optimize Laravel caches
	php artisan optimize

# -----------------------
# Testing
# -----------------------
test: ## Run PHPUnit tests
	php artisan test

test-coverage: ## Run tests with coverage
	php artisan test --coverage

# -----------------------
# Headless Extensions
# -----------------------
install-headless-extensions: ## Install JWT, GraphQL, CORS, Secure Headers, Media Library
	@echo "Installing JWT Auth..."
	composer require tymon/jwt-auth
	php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

	@echo "Installing Lighthouse GraphQL..."
	composer require nuwave/lighthouse
	php artisan vendor:publish --provider="Nuwave\Lighthouse\LighthouseServiceProvider"

	@echo "Installing Secure Headers..."
	composer require bepsvpt/secure-headers
	php artisan vendor:publish --provider="Bepsvpt\SecureHeaders\SecureHeadersServiceProvider"

	@echo "Installing CORS middleware..."
	composer require fruitcake/laravel-cors
	php artisan vendor:publish --provider="Fruitcake\Cors\CorsServiceProvider"

	@echo "Installing Media Library..."
	composer require spatie/laravel-medialibrary
	php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider"

	@echo "Headless extensions installed. Configure them as needed."

# -----------------------
# Full Headless Setup
# -----------------------
setup-headless: ## Full setup: env, install, migrate, seed, and install headless extensions
	make env
	make install
	make migrate
	make seed
	make install-headless-extensions
	@echo "Laravel Headless setup complete."

# WordPress Makefile
# ===============================
# Commands for managing the WordPress site

# Load env vars if present
ifneq (,$(wildcard .env))
    include .env
    export
endif

HOST ?= $(or $(WORDPRESS_HOSTNAME),127.0.0.1)
PORT ?= $(or $(WORDPRESS_PORT),8080)

.PHONY: install serve clean help

help: ## Show this help message with all available commands
	@echo ""
	@echo "WordPress Makefile"
	@echo "=================="
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

# -----------------------
# Core Tasks
# -----------------------
install: ## Install Headless WordPress CMS, WP-CLI, & Plugins
	curl -O https://wordpress.org/latest.tar.gz && \
	tar -xzf latest.tar.gz && \
	mv wordpress/* . && rm -rf wordpress latest.tar.gz && \
	composer require vlucas/phpdotenv && \
	cp ../shared/wp-config.php wp-config.php && \
	wp core install --url="$(WORDPRESS_URL)$(if $(WORDPRESS_PORT),:$(WORDPRESS_PORT))" --title="CMS" \
			--admin_user=admin --admin_password=pass1234 --admin_email=admin@example.com 

	@command -v wp >/dev/null 2>&1 || { \
		echo "Installing WP-CLI..."; \
		curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar; \
		chmod +x wp-cli.phar; \
		sudo mv wp-cli.phar /usr/local/bin/wp; \
		echo "WP-CLI installed."; \
	}

	wp plugin install acf \
		wp-graphql \
		wp-graphql-acf \
		jwt-authentication-for-wp-rest-api \
		wp-graphql-jwt-authentication \
		wp-graphql-cors \
		custom-post-type-ui \
		advanced-custom-fields \
		wordpress-seo \
		--activate


# -----------------------
# Install WP-CLI
# -----------------------
wp-cli: ## Install WP-CLI if not present
	@command -v wp >/dev/null 2>&1 || { \
		echo "Installing WP-CLI..."; \
		curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar; \
		chmod +x wp-cli.phar; \
		sudo mv wp-cli.phar /usr/local/bin/wp; \
		echo "WP-CLI installed."; \
	}

# -----------------------
# Headless Plugin Setup
# -----------------------
plugins: wp-cli ## Install and activate plugins for headless WordPress
	@echo "Installing Headless WordPress plugins..."
	wp plugin install \
		advanced-custom-fields \
		custom-post-type-ui \
		wordpress-seo \
		jwt-authentication-for-wp-rest-api \
		wp-graphql \
		https://github.com/wp-graphql/wp-graphql-jwt-authentication/releases/latest/download/wp-graphql-jwt-authentication.zip \
		--activate
	@echo "Plugins installed and activated."

# -----------------------
# Serve WordPress
# -----------------------
start: ## Serve WordPress locally using built-in PHP server
	@echo "Serving WordPress at http://$(HOST):$(PORT)"
	php -S $(HOST):$(PORT) -t .

# -----------------------
# Maintenance
# -----------------------
clean: ## Remove cache/temp files
	rm -rf wp-content/cache/*

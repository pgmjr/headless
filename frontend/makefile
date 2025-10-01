# Next.js Makefile
# ===============================
# Commands for managing the Next.js frontend app
# This file lives in ./frontend/Makefile

# Load env vars if present
ifneq (,$(wildcard .env.local))
    include .env.local
    export
endif

HOST ?= $(or $(NEXT_PUBLIC_HOST),127.0.0.1)
PORT ?= $(or $(NEXT_PUBLIC_PORT),3000)

.PHONY: install dev build start lint format test clean postbuild help

help: ## Show this help message with all available commands
	@echo ""
	@echo "Next.js Frontend Makefile"
	@echo "========================="
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
# Core Installation Tasks
# -----------------------
install: ## Install dependencies
	npm install

dev: ## Start Next.js in development mode
	npm run dev -- --hostname $(HOST) --port $(PORT)

build: ## Build the Next.js app for production (runs postbuild)
	npm run build
	make postbuild

start: ## Start the Next.js app in production mode
	npm run start -- --hostname $(HOST) --port $(PORT)

# -----------------------
# Code Quality
# -----------------------
lint: ## Run ESLint checks
	npm run lint

format: ## Format code with Prettier
	npm run format

# -----------------------
# Testing
# -----------------------
test: ## Run tests
	npm run test

# -----------------------
# Maintenance
# -----------------------
clean: ## Remove node_modules and build output
	rm -rf node_modules .next

# -----------------------
# Post Build Scripts
# -----------------------
postbuild: ## Generate SRI hashes after build
	node scripts/generate-sri.js


# -----------------------
# Permission Issue
# -----------------------
permission:
	@echo
	@echo "Resolving permission issue for $(CURRENT_USER)"
	@sudo chown -R $(CURRENT_USER):$(CURRENT_USER) .
	@echo "Completed successfully!"

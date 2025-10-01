#!/bin/bash

echo "Installing dependencies on macOS..."

brew install php composer node docker
@echo "type `make cms` to install cms"
@echo "type `make frontend` to install frontend"
@echo "type `make backend` to install backend"


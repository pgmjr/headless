#!/bin/bash

echo "Uninstalling global dependencies via Homebrew..."

brew uninstall --ignore-dependencies php composer node docker
brew cleanup

echo "Reinstalling dependencies..."

brew install php composer node docker

echo "macOS global dependencies reinstalled."

#!/bin/bash

echo "Installing dependencies on Linux..."

sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update

sudo apt install -y \
    php8.2 php8.2-cli php8.2-mbstring php8.2-xml php8.2-curl php8.2-mysql \
    apache2 libapache2-mod-php8.2 composer curl unzip nodejs npm

sudo apt update
sudo a2enmod rewrite

npm install

@echo "type `make cms` to install cms"
@echo "type `make frontend` to install frontend"
@echo "type `make backend` to install backend"


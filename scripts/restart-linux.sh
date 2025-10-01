#!/bin/bash

echo "Removing global dependencies..."

sudo apt purge -y php8.2* apache2 nodejs npm composer docker.io
sudo apt autoremove -y
sudo apt clean

echo "Reinstalling dependencies..."

sudo apt update
sudo apt install -y \
    php8.2 php8.2-cli php8.2-mbstring php8.2-xml php8.2-curl php8.2-mysql \
    apache2 libapache2-mod-php8.2 composer curl unzip nodejs npm docker.io

sudo a2enmod rewrite
sudo systemctl restart apache2

echo "Linux global dependencies reinstalled."

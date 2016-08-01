#!/bin/bash

# auto build script for my-portfolio app
# place it on appropriate folder

git pull
pm2 stop my-portfolio
npm install
pm2 start my-portfolio



#!/bin/sh
yarn start & node /app/index.js & cd /speedtest; python3 -m http.server 8000
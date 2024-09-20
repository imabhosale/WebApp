#!/bin/bash
pm2 stop app || true
pm2 start app.js --name "node_app"

#!/bin/bash

if [ "$(id -u)" == "0" ]; then
   echo "This script may NOT run as Root (chromium does not work as root)"
   exit 1
fi

echo "Listing known displays:"
ls /tmp/.X11-unix

export DISPLAY=:8.3
./demo.sh

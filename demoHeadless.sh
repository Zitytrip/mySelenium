#!/bin/bash

if [ "$(id -u)" == "0" ]; then
   echo "This script may NOT run as Root (chromium does not work as root)"
   exit 1
fi

sudo Xvfb :5 -once -screen 8 1024x768x8  &
export DISPLAY=:5.8
./demo.sh
sudo killall Xvfb

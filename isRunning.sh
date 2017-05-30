#!/bin/bash

pids=$(pidof /usr/bin/Xvfb)
if [ -n "$pids" ]; then
    processes="$(ps --format command --no-headers -ww --pid $pids)"
    echo $processes
else
    echo "Not running"
fi

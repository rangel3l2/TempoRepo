#!/bin/bash

# Start Xvfb (virtual framebuffer)
Xvfb :0 -screen 0 1024x768x16 &

# Start Fluxbox (lightweight window manager)
fluxbox &

# Allow connections to the virtual display via x11vnc
x11vnc -display :0 -nopw -forever &

# Start your Python application
python main.py
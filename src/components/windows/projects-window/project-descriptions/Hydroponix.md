---
title: Hydroponix
image: https://raw.githubusercontent.com/Tymotex/Hydroponix/master/static/thumbnail.png
summary: An IoT automated plant propagation system built with Python.
---

An IoT automated plant propagation system built with Python on the Raspberry Pi Zero W
with InfluxDB, Flask and other libraries.

This project consists of two main parts:

1. A Flask server that hosts a dashboard that lets the user view current sensor readings, control the pump and enable/disable the automatic watering process
2. A (daemon) process that automatically sends sensor data and camera output to timz.dev/hydroponix

#!/bin/bash
cd /home/pi/e-Paper/RaspberryPi_JetsonNano/python/
echo "Running weather refresh"
sudo -u pi node webimage.js
echo "Now converting bmp"
sudo -u pi convert weather.jpg -rotate "180" -colorspace gray -colors 2 -normalize pic/weather.bmp
echo "Updating display"
./epd
echo "Done"

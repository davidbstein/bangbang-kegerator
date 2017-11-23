# bangbang-kegerator
Simple temperature control module

## parts
some of these are cheaper from places other than amazon.

 - Thermometer and resistor https://www.adafruit.com/product/381
 - Power relay (plug whatever cooling or heating element into this) - https://www.amazon.com/dp/B0178IC734
 - Raspberry Pi Zero W and power- https://www.amazon.com/dp/B071L2ZQZX

## attach the thermometer

this tutorial might help - just soldier things to the correct leads

https://learn.adafruit.com/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing/hardware

## setup

 - install raspbian - https://www.raspberrypi.org/downloads/
 - install nodejs on the computer `apt-get install node`
 - install the dependencies of this package. `npm install`
 - fix the URL in index.js
 - set up a minutely cron - https://www.raspberrypi.org/documentation/linux/usage/cron.md
 

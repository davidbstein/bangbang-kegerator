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

## Set up the monitor

- go to `drive.google.com`
- add `google scripts`

![add scripts](https://raw.githubusercontent.com/davidbstein/bangbang-kegerator/master/Screenshot%202017-11-23%2000.09.49.png)

- make a script with the following code and save it

```
function doPost(e) {
  props = PropertiesService.getScriptProperties();
  arr = JSON.parse(props.getProperty("last_n") || '[]');
  arr = arr.slice(0, 100);
  arr.unshift(new Date() + " - " + e.postData.contents);
  props.setProperty("last_n", JSON.stringify(arr));
}

function doGet(e) { 
  props = PropertiesService.getScriptProperties()
  arr = JSON.parse(props.getProperty("last_n") || '[]');
  return HtmlService.createHtmlOutput("<pre>" + JSON.stringify(arr, null, "  ") + "</pre>")
}
```
- go to publish > deploy as web app
- save the link (you need to replace my link in `index.js`


## setup

 - install raspbian - https://www.raspberrypi.org/downloads/
 - install nodejs on the computer `apt-get install node`
 - install the dependencies of this package. `npm install`
 - fix the URL in index.js
 - set up a minutely cron - https://www.raspberrypi.org/documentation/linux/usage/cron.md
 

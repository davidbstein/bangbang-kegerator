const fs = require('fs');
const { Client } = require('tplink-smarthome-api');

const client = new Client();

const f2c = (f) => (f-32) * 5 / 9;

const c2f = (c) => (9/5) * c + 32;

const getTempC = () => parseInt(fs.readFileSync('/sys/bus/w1/devices/28-000008e53064/w1_slave', 'ascii').split(' ').pop().substr(2)) / 1000;

const getTempF = () => c2f(getTempF)

const min_temp = 80;
const max_temp = 90;

const log = (msg) => {
	fetch(new Request(
			'https://script.google.com/macros/s/AKfycbyOuqPq-beokencETmDUHs7Vmcc1PUQ7ERQD09PPvVMevJcuxw/dev', 
			{method: 'POST', body: 'andanother'}
	));
}

const setBangBang = (device) => {
	const curTemp = getTempF();
	if (curTemp < min_temp) {
		log("device on! temp: " + curTemp);
		device.setPowerState(true);
	} else if (curTemp > max_temp)
		log("device off! temp: " + curTemp);
		device.setPowerState(false);
	} else {
		log("nothing! temp: " + curTemp);
	}
}

// Look for devices, log to console, and turn them on
client.startDiscovery({discoveryTimeout: 10 * 1000})
  .on('device-new', (device) => {
    device.getSysInfo().then((d) => {
      if (d.alias == "kegerator") {
        setBangBang(device);
      }
    })
  });
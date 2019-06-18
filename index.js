const NodeWebcam = require('node-webcam');

const opts = {
  width: 1280,
  height: 720,
  quality: 100,
  delay: 1000,
  saveShots: true,
  output: 'jpeg',
  device: false,
  callbackReturn: 'location',
  verbose: false,
};

const pad = (n, width) => new Array(width - (n + '').length + 1).join('0') + n;

let number = 0;
const stopNumber = 10;

const timer = setInterval(() => {
  NodeWebcam.capture(`cap/${pad(number++, 4)}`, opts, function (err, data) {});

  if (number >= stopNumber) {
    clearInterval(timer);
  }
}, 5000);

const busylight = require('busylight').get();

module.exports = (req, res) => {
  // Ring and blink
  busylight.ring('Quiet').blink(['yellow', 'red', 'blue'], 300);
  // Turn off ring and blink after 5000ms
  setTimeout(() => {
    busylight.ring(false).blink(false);
}, 5000);
  res.json({ message: 'Busylight should ring and blink' });
};

const busylight = require('busylight').get();

module.exports = (req, res) => {
  // Ring and blink
  busylight.ring('TelephoneNordic').pulse(['red', 'blue'], 300);
  // Turn off ring and blink after 5000ms
  setTimeout(() => {
    busylight.ring(false).pulse(false);
}, 5000);
  res.json({ message: 'Busylight should ring and pulse' });
};

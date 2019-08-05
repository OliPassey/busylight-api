const busylight = require('busylight').get();

module.exports = (req, res) => {
  // Ring and blink
  busylight.ring('Funky').blink(['red', 'yellow', 'blue', 'green'], 150);

  res.json({ message: 'Busylight should ring and blink' });
};

const busylight = require('busylight').get();

module.exports = (req, res) => {
  busylight.light('orange');

  res.json({ message: 'Busylight should be on and orange colour' });
};

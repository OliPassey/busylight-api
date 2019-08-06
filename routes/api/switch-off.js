const busylight = require('busylight').get();

module.exports = (req, res) => {
  // Switch everything off
  busylight.off();
  setTimeout(() => {
    busylight.close();
    res.json({ message: 'Connection to Busylight closed' });
  }, 500);
};

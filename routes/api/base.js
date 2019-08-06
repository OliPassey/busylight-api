const busylights = require('busylight').devices(true);

module.exports = (req, res) => {
  res.json({
    message: 'List of connected USB devices',
    busylights,
  });
};

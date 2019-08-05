const express = require('express');

const router = express.Router();

// Add your paths and callbacks to the files here
const routes = [
  {
    path: '/',
    callback: require('./api/base.js'),
  },
  {
    path: '/blink',
    callback: require('./api/blink.js'),
  },
  {
    path: '/switch-on',
    callback: require('./api/switch-on.js'),
  },
  {
    path: '/switch-off',
    callback: require('./api/switch-off.js'),
  },
];

routes.forEach((route) => {
  router.get(route.path, (req, res) => {
    route.callback(req, res);
  });
});

module.exports = router;

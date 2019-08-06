// Do not touch this file, all the editable API endpoints are in the /routes folder
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 9000;

// Prefix all the routes with /api
app.use('/api', routes);

app.listen(port);
console.log(`Busylight API server listening on port ${port}`);

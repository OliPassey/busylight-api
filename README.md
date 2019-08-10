# Busylight API 💡

This project uses the NodeJS Busylight Library from porsager
https://github.com/porsager/busylight
In order to use the BusyLights with my home automation system i needed a web API
Thanks to Luigi Mannoni for the assistance in adding an express js server
https://github.com/luigimannoni

## Quick start

As usual, `npm install` to install all the required modules, `npm start` to launch the Express API server.
So far this has only been tested on Windows 10

## Routes

`server.js` shouldn't be touched, all the routes callbacks should be created inside `./routes/api/` and then added to `./routes/index.js`

The express server will run under the port 9000, this can be either customised using a PORT env variable on your machine or editing the file directly (I'd recommend setting all the sensitive stuff on env vars).

## Endpoints

Currently there are 4 URLs:

* `http://localhost:9000/api/` should list all connected USB devices, might be useful to see if express sees the Busylights

* `http://localhost:9000/api/blink` should make the busylight ring and blink

* `http://localhost:9000/api/pulse` should turn on the busylight

* `http://localhost:9000/api/green` should turn off the busylight AND close its connection

* `http://localhost:9000/api/red` should turn off the busylight AND close its connection

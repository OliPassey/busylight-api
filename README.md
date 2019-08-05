# Busylight API 💡

## Quick start

As usual, `npm install` to install all the required modules, `npm start` to launch the Express API server.

## Routes

`server.js` shouldn't be touched, all the routes callbacks should be created inside `./routes/api/` and then added to `./routes/index.js`

The express server will run under the port 9000, this can be either customised using a PORT env variable on your machine or editing the file directly (I'd recommend setting all the sensitive stuff on env vars).

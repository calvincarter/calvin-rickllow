const express = require("express");
const app = express();
const cors = require("cors");

const locationsRoutes = require('./routes/locations');

// CORS allows our backend to communicate with our frontend and vice versa.  Otherwise, we'll get an error in the browser every
// time our frontend requests something from our backend, saying Cross Origin Resource Sharing not allowed.
app.use(cors());
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/api/locations', locationsRoutes);

// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
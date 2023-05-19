// Setting constants for Require, Express, Path and setting out local host port to 3000
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

// Setting API Routes
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(apiRoute);
app.use(htmlRoute);
// setting port to listen and display what port it is listening on.
app.listen(PORT, () => {
  console.log(`Now listening on this PORT ${PORT}!`);
});

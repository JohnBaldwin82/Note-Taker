const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT, () => {
  console.log(`Now listening on this PORT ${PORT}!`);
});

const express = require('express');
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))


app.use(apiRoute)
app.use(htmlRoute)

app.listen(PORT, () => {
  console.log(`Now listening on this PORT ${PORT}!`)
});
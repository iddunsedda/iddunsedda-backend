const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

//setting up express static to serve static files
app.use(express.static('public'))

//setting up body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//pulling in routes from routes file
app.use('/', routes)

//starting up server
app.set("port", 4000);
app.listen(app.get("port"), () => {
  console.log('Application started on port 4000. Hooray!')
})

module.exports = app;

const express   = require('express');
const bodyParser = require('body-parser');
const path      = require('path');
const mongoose  = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

// Express instance 
const app = express();

// Connect to database 
mongoose.connect('mongodb://localhost:27017/credits-tracker', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true); // Deprecation fix 

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  
});

// Models 
const Credit = require('./models/credit-model');

// Mount Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/public')));

// Declare Routes 
const indexRoutes = require('./routes/index-routes');

app.use('/', indexRoutes);


// Declare default view directory and view engine 
app.set('views', './views');
app.set('view engine', 'pug');

// Run Server 
app.listen(3000, () => {
  console.log("Running on local host: 3000");
});

module.exports = app
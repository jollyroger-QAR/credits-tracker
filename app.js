const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Express instance
const app = express();

// Connect to database
mongoose.connect('mongodb://localhost:27017/credits-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Deprecation fix
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected to the database');
});

// Models
const Credit = require('./models/credit-model');

// Mount Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Declare Routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

// Declare default view directory and view engine
app.set('views', './views');
app.set('view engine', 'pug');

// Run Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on local host: ${port}`);
});

module.exports = app;
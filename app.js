const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

// Import Routes
const postRoute = require('./routes/post');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/post', postRoute);


// ROUTES
app.get('/', (req, res) => {
  res.send('We are home');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true},
  // {useUnifiedTopology: true},
  () => {
    console.log('connected to DB! Mongoose')
    console.log(mongoose.connection.readyState)
  });

const db = mongoose.connection;
db.on('Error', (err) => console.error(err));

// Listen to the server
app.listen(3000);
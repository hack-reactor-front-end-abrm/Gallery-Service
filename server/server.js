const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { getDataFromDatabase, getListingByID } = require('../database/utils.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/:number', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/'));
});

app.get('/api', (req, res) => {
  getDataFromDatabase((err, results) => {
    res.send(results);
  });
});

app.get('/api/:id', (req, res) => {
  getListingByID(req.params.id, (err, results) => {
    res.send(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Connected to Express server on Port 3000');
});

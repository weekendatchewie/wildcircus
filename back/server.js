const connection = require('./conf');
const express = require('express');

const bodyParser = require('body-parser');


const app = express();
const port = 8000;


app.use(bodyParser.json()); // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies

// CONNECTION PORT ///////////////////////////////////////////////////
app.listen(port, err => {
  if (err) {
    throw new Error('Error listening port ...');
  }
  console.log(`Server is listening on ${port}`);
});

//GET SHOW /////////////////////////////////////////////////
app.get('/shows', (req, res) => {
  connection.query('SELECT * from date_show', (err, results) => {
    if (err) {
      res.status(500).send('Error server 500');
    } else {
      res.json(results);
    }
  });
});

//POST CUSTOMER /////////////
app.post('/customers', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO customer SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error try again");
    } else {
      res.sendStatus(200);
    }
  });
});

//GET CUSTOMER /////////////////////////////////////////////////
app.get('/customers', (req, res) => {
  connection.query('SELECT * from customer', (err, results) => {
    if (err) {
      res.status(500).send('Error server 500');
    } else {
      res.json(results);
    }
  });
});
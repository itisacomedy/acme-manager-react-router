var express = require('express');
var app = express();
const path = require('path');
const db = require('./db');
const { Employees } = db.models;
module.exports = app;


app.use('/dist',express.static(path.join(__dirname,'dist')));

app.get('/',(req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/employees',(req, res, next) => {
  Employees.findAll()
    .then(employees => {
      console.log(`employees ${employees}`)
      res.json(employees)
    })
    .catch(next)
})

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

db.sync()
  .then(() => db.seed())

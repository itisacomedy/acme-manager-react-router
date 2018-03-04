var express = require('express');
var app = express();
const path = require('path');
module.exports = app;


app.use('/dist',express.static(path.join(__dirname,'dist')));

app.get('/',(req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

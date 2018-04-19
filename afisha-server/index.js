const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      indexRoutes = require('./routes/indexRoutes');

const db = mongoose.connect('mongodb://localhost/eventAPI');
const app = express();
mongoose.Promise = require('bluebird');

let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', indexRoutes);

app.get('/*', (req, res) => {
    res.redirect('/api');
});

app.listen(port, () => {
    console.log("Running on http://localhost:" + port);
});
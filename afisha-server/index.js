const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost/eventAPI');
const Event = require('./models/eventModel');
const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const eventRouter = require('./routes/eventRoutes')(Event);

app.use('/api/events', eventRouter);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("Running on http://localhost:" + port);
});
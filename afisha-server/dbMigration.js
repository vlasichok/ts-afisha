const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventAPI');
const Event = require('./server/api/models/eventModel');

Event.create({
    title: "Event super fast",
    abstract: "Here we go with our awesome abstract",
    description: "Here we go with our amazing description",
    date: new Date,
    createdAt: new Date,
    updatedAt: new Date,
    timeOfEvent: "12 am",
    views: 129,
    attends: 123123,
    images: 123123123,
    author: {
        id: new mongoose.Types.ObjectId,
        authorName: "asd"
    },
    comments: [
    ]
}).then((err, event) => {
    console.log(err, event);
});
const mongoose = require('mongoose');

const Event = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    abstract: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    location: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    timeOfEvent: {
        type: String
    },
    views: {
        type: Number
    },
    attends: {
        type: Number
    },
    images: {
        type: [Buffer]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comments"
        }
    ]
});

module.exports = mongoose.model('Event', Event);
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
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

const Event = mongoose.model('Event', EventSchema);

Event.getOneEvent = (id) => {
    return Event.findById(id, '-__v')
        .populate('Author Comments')
        .exec();
};

Event.getEvents = () => {
    return Event.find({}, '-__v')
        .populate('Author Comments')
        .exec();
};

Event.updateEvents = (id, eventBody) => {
    return Event.findByIdAndUpdate(id, eventBody)
        .populate('Author Comments')
        .exec()
};

module.exports = Event;
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
    ],
    active: {
        type: Boolean
    }
});

const Event = mongoose.model('Event', EventSchema);
const avoidPropery = '-__v';

Event.getOneEvent = (id) => {
    return Event.findById(id, avoidPropery)
        .populate('Author Comments')
        .exec();
};

Event.getEvents = () => {
    return Event.find({}, avoidPropery)
        .populate('Author Comments')
        .exec();
};

Event.updateEvents = (id, eventBody) => {
    return Event.findByIdAndUpdate(id, eventBody)
        .populate('Author Comments')
        .exec()
};

module.exports = Event;
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: Buffer
    },
    role: {
        type: Number
    },
    attends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Events"
        }
    ]
});

module.exports = mongoose.model('user', User);
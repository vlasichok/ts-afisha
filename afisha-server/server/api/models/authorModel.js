const mongoose = require('mongoose');

const Author = new mongoose.Schema({
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
    socials: {
        type: [String]
    }
});

module.exports = mongoose.model('Author', Author);
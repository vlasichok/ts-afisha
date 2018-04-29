const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    text: {
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
    authorOfComment: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        authorName: String,
        avatar: Buffer
    }
});

module.exports = mongoose.model('comment', Comment);
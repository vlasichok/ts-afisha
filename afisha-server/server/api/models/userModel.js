const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

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

User.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    return user;
};

User.pre('save', function (next) {
    const user = this;

    if(!user.isModified('password')){
        return next();
    }


    bcrypt.genSalt(10, (error, salt) => {
        if(error){
            return next(error);
        }
        bcrypt.hash(user.password, salt, null, (error, hash) => {
            if(error) return next(error);

            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', User);
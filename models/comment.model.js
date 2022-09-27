const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    author: {
        type: String,
        // required: [true, "Your comment must be at least 10 characters long"]
    },
    text: {
        type: String,
        // required: [true, "Your comment must be at least 10 characters long"]
    },
    time : { type : Date, default: Date.now}
},
    { timestamps: true });

module.exports = { CommentSchema }


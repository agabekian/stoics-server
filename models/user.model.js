const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: Object
    },
    email : {
        type: String
    }
},
    { timestamps: true }
);

// module.exports = { userSchema }
module.exports.User = mongoose.model('User', userSchema)
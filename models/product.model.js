const mongoose = require('mongoose');
const { CommentSchema } = require('./comment.model')
const { userSchema } = require('./user.model')

const ProductSchema = new mongoose.Schema({
    content: {
        type: Object
    },
    user: [mongoose.model("User").schema], //directly accessing the model, had issues w circular dependencies with
    comments: [CommentSchema],
},
    { timestamps: true }
);

module.exports.Product = mongoose.model('Product', ProductSchema) 

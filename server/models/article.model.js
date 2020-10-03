const mongoose = require('mongoose')
const Comment = require('./comment.model')
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    imgs: {type: [String], required: false},
    comments: {type: [mongoose.Schema.Types.ObjectId], ref: 'Comment', required: false}
});

module.exports = mongoose.model('Article', articleSchema);
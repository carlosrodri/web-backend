const mongoose = require('mongoose');
const Comment = require('./comment.model');
const {
    Schema
} = mongoose;

const tagSchema = new Schema({
    kindTag: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    }
});


const articleSchema = new Schema({
    tags: {
        type: [tagSchema]
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'comment',
        required: false
    }
});

module.exports = mongoose.model('Article', articleSchema);
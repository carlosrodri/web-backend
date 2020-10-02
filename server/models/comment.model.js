const mongoose = require('mongoose')
const { Schema } = mongoose;

const commentSchema = new Schema({
    articleId: {type: String, required: true},
    name: {type: String, required: true},
    mail: {type: String, required: true},
    date: {type: Date, required: true},
    comment: {type: String, required: true}
});

module.exports = mongoose.model('Comment', commentSchema);
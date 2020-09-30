const mongoose = require('mongoose')
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true}
});

module.exports = mongoose.model('Article', articleSchema);
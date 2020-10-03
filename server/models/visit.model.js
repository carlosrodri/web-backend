const mongoose = require('mongoose')
const { Schema } = mongoose;

const visitSchema = new Schema({
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Visit', visitSchema);
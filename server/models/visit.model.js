const mongoose = require('mongoose')
const { Schema } = mongoose;

const visitSchema = new Schema({
    date: {type: Date, default: Date.now},
    device: {type: String, required: true}
});

module.exports = mongoose.model('Visit', visitSchema);
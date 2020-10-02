const mongoose = require('mongoose')
const { Schema } = mongoose;

const subscriberSchema = new Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true}
})

module.exports = mongoose.model('Subscriber', subscriberSchema)


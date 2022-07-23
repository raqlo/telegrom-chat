const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    date: Date
})

const model = mongoose.model('Message', messagesSchema)
module.exports = model

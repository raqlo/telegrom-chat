const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatsSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
})

const model = mongoose.model('Chat', chatsSchema)
module.exports = model

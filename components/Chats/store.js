const Model = require("./model");

async function addChat(chat) {
    const newChat = await new Model(chat);
    return newChat.save();
}

async function getChats(userId) {
    console.log(userId)
    return new Promise((resolve, reject) => {
        let filter = {};
        if(userId) {
            filter = {
                users: userId
            }
        }
        Model.find(filter)
            .populate('users')
            .exec((err, data) => {
                if(err) {
                    reject(err);
                    return false
                }
                resolve(data)
            })
    })
}

module.exports = {
    add: addChat,
    list: getChats
}

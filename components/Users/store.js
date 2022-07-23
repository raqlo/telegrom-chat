const Model = require("./model");

async function addUser(message) {
    const user = await new Model(message);
    return user.save();
}

async function getUsers() {
    const users = await Model.find();
    return users;
}

module.exports = {
    add: addUser,
    list: getUsers
}

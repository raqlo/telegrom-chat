const messages = require('../components/Messages/network');
const users = require('../components/Users/network');
const chats = require('../components/Chats/network');

const routes = function (server) {
    server.use('/messages', messages);
    server.use('/users', users);
    server.use('/chats', chats);
}

module.exports = routes

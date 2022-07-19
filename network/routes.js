const messages = require('../components/Messages/network')

const routes = function (server) {
    server.use('/messages', messages);
}

module.exports = routes

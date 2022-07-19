const express = require('express');
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (req, res) {
    console.log(req.headers)
    res.header({"custom": "value"});
    res.send('Lista de mensajes')
})

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
    response.success(req, res, 'Creado correctamente', 201)
})

router.delete('/', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    res.send('deleted')
})

module.exports = router;

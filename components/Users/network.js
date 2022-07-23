const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", function (req, res) {
    controller
        .addUser(req.body.name)
        .then((user) => response.success(req, res, user, 200))
        .catch((err) => console.error(err));
});

router.get('/', function (req, res) {
    controller.getUsers()
        .then((users) => response.success(req, res, users, 200))
        .catch((err) => console.error(err));
})

module.exports = router

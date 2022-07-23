const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", function (req, res) {
    controller
        .addChat(req.body.users)
        .then((user) => response.success(req, res, user, 201))
        .catch((err) => console.error(err));
});

router.get('/:userId', function (req, res) {
    console.log(req.params.userId)
    controller.getChats(req.params.userId)
        .then((users) => response.success(req, res, users, 200))
        .catch((err) => console.error(err));
})

module.exports = router

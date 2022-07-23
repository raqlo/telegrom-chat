const express = require("express");
const multer = require("multer");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

const upload = multer({ dest: "public/files" });

router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({ custom: "value" });
  const filterMessages = req.query.chat || null;
  controller
    .getMessages(filterMessages)
    .then((messages) => response.success(req, res, messages, 200))
    .catch((err) => console.error(err));
});
router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "error interno", 500, err);
    });
});
router.post("/", upload.single('file'), function (req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((data) => {
      response.success(req, res, data, 201);
    });
});

router.delete("/:id", function (req, res) {
  console.log(req.body);
  console.log(req.query);
  controller
    .deleteMessage(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "error interno", 500, err);
    });
});

module.exports = router;

require("dotenv").config();
const db = require("mongoose");
const Model = require("./model");

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.osmsq8l.mongodb.net/?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("[db] Conectada con éxito"))
  .catch((err) => console.error("[db]", err));

function addMessage(message) {
  const myMessage = new Model(message);
  return myMessage.save();
}

async function getMessages(filterUser) {
  // return list
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  console.log(messages);
  return messages;
}

async function updateText(id, message) {
  const messages = await Model.findOneAndUpdate(
    { _id: id },
    { message },
    { new: true }
  );
  console.log(messages);
  return messages;
}

async function deleteMessage(id) {
  const message = await Model.findByIdAndDelete(id);
  return message;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage: updateText,
  delete: deleteMessage
};

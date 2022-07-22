const Model = require("./model");

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
  console.log(`[get]: `, messages);
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

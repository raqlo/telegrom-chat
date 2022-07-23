const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  return myMessage.save();
}

function getMessages(filterUser) {
  // return list
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Model.find(filter)
        .populate('user')
        .exec((err, data) => {
          if(err) {
            reject(err)
            return false
          }
          resolve(data)
        })
  });
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
  delete: deleteMessage,
};

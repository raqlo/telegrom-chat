const store = require("./store");

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    const fullMessage = {
      chat,
      user: user,
      message: message,
      date: new Date(),
    };
    console.log(fullMessage);
    resolve(store.add(fullMessage));
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    // console.log(id)
    // console.log(message)
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateMessage(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise(async(resolve, reject) => {
    if(!id) {
      reject('Invalid id')
      return false;
    }
    const result = await store.delete(id);
    resolve(result)
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};

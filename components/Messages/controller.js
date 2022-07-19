function addMessage(user, message) {
  const fullMessage = {
    user: user,
    message: message,
    date: new Date(),
  };
  console.log(fullMessage);
}

module.exports = {
  addMessage,
};

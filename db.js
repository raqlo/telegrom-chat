const db = require("mongoose");

db.Promise = global.Promise;
function connect ( URI) {
db.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("[db] Conectada con éxito"))
  .catch((err) => console.error("[db]", err));
}

module.exports = connect;

const admin = require("firebase-admin");
const serviceAccount = require("../fshop-key.json");
const database = require("../dbURL");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: database,
});


const db = admin.firestore();

module.exports = {admin, db};

const admin = require("firebase-admin");

const serviceAccount = require("./firebase-auth.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://brgio-auth.firebaseio.com"
});

const uid = 'Q24AJHxtAsfXMWOILC4WYgHZ7672'

admin.auth().deleteUser(uid)
  .then(function () {
    console.log('Successfully deleted user');
  })
  .catch(function (error) {
    console.log('Error deleting user:', error);
  });
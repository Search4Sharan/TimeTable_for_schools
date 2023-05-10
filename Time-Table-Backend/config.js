const firebase = require("firebase")
const firebaseConfig = {
      apiKey: 'AIzaSyDEuAQnhNlvDyytnSIlrK7IL6C567H-QbU',
      authDomain: 'time-table-management-30d1c.firebaseapp.com',
      projectId: 'time-table-management-30d1c',
      storageBucket: 'time-table-management-30d1c.appspot.com',
      messagingSenderId: '462678147866',
      appId: '1:462678147866:web:0ed9dbdef9aca59cf462a3',
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const User = db.collection("Users");
    module.exports = User;
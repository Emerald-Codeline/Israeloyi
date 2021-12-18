const firebase = require('firebase')
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCEGKc6KhoCmA5Pya9vVPDVjy1K9Xbo548",
    authDomain: "music-40ea1.firebaseapp.com",
    projectId: "music-40ea1",
    storageBucket: "music-40ea1.appspot.com",
    messagingSenderId: "678309253111",
    appId: "1:678309253111:web:e80efe92cb7f53e26268f2",
    measurementId: "G-42Y9YMX8XC"
};

const db=firebase.initializeApp(firebaseConfig)
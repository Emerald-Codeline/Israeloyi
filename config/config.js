const assert = require("assert");

CONST  

const {
    MONGO_DB_URL,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port:port,
    host:HOST,
    url:HOST_URL,
    firebaseConfig=(
        apiKey: "AIzaSyAwuiP9m4i55xdMxhR_VjqePdTkAt66QuQ",
        authDomain: "israeloyi-87c28.firebaseapp.com",
        projectId: "israeloyi-87c28",
        storageBucket: "israeloyi-87c28.appspot.com",
        messagingSenderId: "646822029460",
        appId: "1:646822029460:web:37dbe384486f09a82c6c81",
        measurementId: "G-P1FZ4R00R0"   
    )
}
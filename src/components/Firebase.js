import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCA1jn1ycgnmpbHfHC9MHGkZFATOVMVHWE",
    authDomain: "tasck-83451.firebaseapp.com",
    databaseURL: "https://tasck-83451-default-rtdb.firebaseio.com",
    projectId: "tasck-83451",
    storageBucket: "tasck-83451.appspot.com",
    messagingSenderId: "668133080399",
    appId: "1:668133080399:web:61d7f339e672141a90d93a",
    measurementId: "G-5E4MSVXGLB"
  };

export default firebase.initializeApp(firebaseConfig);
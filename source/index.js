// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA1jn1ycgnmpbHfHC9MHGkZFATOVMVHWE",
  authDomain: "tasck-83451.firebaseapp.com",
  projectId: "tasck-83451",
  storageBucket: "tasck-83451.appspot.com",
  messagingSenderId: "668133080399",
  appId: "1:668133080399:web:61d7f339e672141a90d93a",
  measurementId: "G-5E4MSVXGLB"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const auth = firebase.auth();

function login() {
  var email = document.getElementById("email_field");
  var password = document.getElementById("password_field");
  
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  }
  function signup() {
    var email = document.getElementById("email_field");
    var password = document.getElementById("password_field");
    
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    }

    function signOut() {
      auth.signOut();
    }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var email = user.email;
      if(window.location.href.indexOf("login.html") > -1 || window.location.href.indexOf("signup.html") > -1)
        window.location.href = "index.html";
      // ...
    } else {
      // User is signed out
      // ...
      if(!(window.location.href.indexOf("login.html") > -1 || window.location.href.indexOf("signup.html") > -1))
      window.location.href = "login.html";
    }
  });

 
  function handleDragStart(e) {
    this.style.opacity = '0..5';
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

  items.forEach(function (item) {
    item.classList.remove('over');
  });
}

document.addEventListener('DOMContentLoaded', (event) => {

  function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';

    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    var files = e.dataTransfer.files;
    for (var i = 0, f; f = files[i]; i++) {
      // Read the File objects in this FileList.
    }
    return false;
  }

  let items = document.querySelectorAll('.container .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
});
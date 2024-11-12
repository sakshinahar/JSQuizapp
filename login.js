// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD59y_KcWUFu8qYNqsMMAjv1YM4GWz07K4",
  authDomain: "quizbuzz-96863.firebaseapp.com",
  databaseURL: "https://quizbuzz-96863-default-rtdb.firebaseio.com",
  projectId: "quizbuzz-96863",
  storageBucket: "quizbuzz-96863.appspot.com",
  messagingSenderId: "585146504477",
  appId: "1:585146504477:web:6703d309efe95149f87df4",
  measurementId: "G-Y3QB28SB9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

//inputs for registering
const submit=document.getElementById('login');
//add eventlistener
submit.addEventListener('click',async function(e){
  e.preventDefault();
  const email=document.getElementById('login-mail').value;
  const password=document.getElementById('login-password').value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Account logging in....")
    window.location.href="questions.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})

    





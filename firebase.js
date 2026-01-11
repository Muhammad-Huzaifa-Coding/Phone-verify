
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbTqRTIMgXV7Ko6lUupssQsMe4V8bKu8U",
    authDomain: "aaaaa-a6ba1.firebaseapp.com",
    projectId: "aaaaa-a6ba1",
    storageBucket: "aaaaa-a6ba1.firebasestorage.app",
    messagingSenderId: "1076335567500",
    appId: "1:1076335567500:web:46be61efd80a6767ea11a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber }
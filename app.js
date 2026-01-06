// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-Mtzd0icA9Q4PJY0gXvcFZdoHejtQz3E",
    authDomain: "phone-7eede.firebaseapp.com",
    projectId: "phone-7eede",
    storageBucket: "phone-7eede.firebasestorage.app",
    messagingSenderId: "358327082622",
    appId: "1:358327082622:web:e9adad2ddce45d13f0822f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const phone_no = document.getElementById("phone");
const sent_otp = document.getElementById("otp-btn");
const verify_otp = document.getElementById("verify-otp");
const home_screen = document.querySelector(".home_s");
const otp_screen = document.querySelector(".ph-otp");

const sentotp = () => {

    signInWithPhoneNumber(auth, phone_no.value, window.recaptchaVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP Sent")
        }).catch((error) => {
            alert(error)
        });
}

sent_otp.addEventListener("click", sentotp)

const verify = () => {

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
            home_screen.style.display = "block";
            otp_screen.style.display = "none";

        },
        'expired-callback': () => {
            home_screen.style.display = "none";
            otp_screen.style.display = "block";
        }
    });
}

verify_otp.addEventListener("click", verify);
const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);

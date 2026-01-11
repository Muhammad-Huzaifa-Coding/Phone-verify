import { auth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from "/firebase.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});


window.recaptchaVerifier = new RecaptchaVerifier(
    auth,
    'recaptcha-container',
    {}
);


document.getElementById("sendOtp").addEventListener("click", () => {
    const phoneNumber = document.getElementById("phone").value;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP Sent Successfully");
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
});


document.getElementById("verifyOtp").addEventListener("click", () => {
    const code = document.getElementById("otp").value;

    confirmationResult.confirm(code)
        .then((result) => {
            const user = result.user;
            console.log("User signed in:", user);
            alert("Authentication Successful");
        })
        .catch((error) => {
            console.error(error);
            alert("Invalid OTP");
        });
});



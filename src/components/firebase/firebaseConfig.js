// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiR-jzShF1_1DWfZBxy89HdSjjJwcOCs0",
    authDomain: "craftsman-shahin.firebaseapp.com",
    databaseURL: "https://craftsman-shahin-default-rtdb.firebaseio.com",
    projectId: "craftsman-shahin",
    storageBucket: "craftsman-shahin.firebasestorage.app",
    messagingSenderId: "287451017943",
    appId: "1:287451017943:web:e4d0538716894b3d0bb692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig
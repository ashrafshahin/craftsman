
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";


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
export const auth = getAuth(app);
export const database = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();
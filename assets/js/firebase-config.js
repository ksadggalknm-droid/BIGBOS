// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA3YnvPPNsG1-u2c78YBsxs3gUjkS57y0",
    authDomain: "bigbos-32855.firebaseapp.com",
    projectId: "bigbos-32855",
    storageBucket: "bigbos-32855.firebasestorage.app",
    messagingSenderId: "850829370363",
    appId: "1:850829370363:web:63361adb6972cb1be3215e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
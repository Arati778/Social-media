// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB10ZghrN0oRGAS_3DHp23sJ6oonL7XJ8Q",
    authDomain: "linkedin-clone-247d9.firebaseapp.com",
    projectId: "linkedin-clone-247d9",
    storageBucket: "linkedin-clone-247d9.appspot.com",
    messagingSenderId: "49631342415",
    appId: "1:49631342415:web:09a620efff2996b9dedf3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4AufZQxA2jlYj-UBrmm8n_vpPfRxGvnU",
  authDomain: "kanban-board-620c3.firebaseapp.com",
  databaseURL: "https://kanban-board-620c3-default-rtdb.firebaseio.com",
  projectId: "kanban-board-620c3",
  storageBucket: "kanban-board-620c3.appspot.com",
  messagingSenderId: "397370238541",
  appId: "1:397370238541:web:176cc3eb099a0061d11e04",
  measurementId: "G-5J87F6JMZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };



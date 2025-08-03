
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlj0CDnAJIn4kejOjLHoE3l4uDTEb-etk",
  authDomain: "injaazbackend.firebaseapp.com",
  projectId: "injaazbackend",
  storageBucket: "injaazbackend.firebasestorage.app",
  messagingSenderId: "527016734459",
  appId: "1:527016734459:web:71f85ad6d29d0625690a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };

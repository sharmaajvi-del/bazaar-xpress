// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjPDtX_-aGrxzrMfWfFBMoxX9udnI5_Bo",
  authDomain: "bazaar-xpress.firebaseapp.com",
  projectId: "bazaar-xpress",
  storageBucket: "bazaar-xpress.firebasestorage.app",
  messagingSenderId: "937870495708",
  appId: "1:937870495708:web:25d7883790394620dd8919",
  measurementId: "G-V1K46S600M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Export Database
export { db };

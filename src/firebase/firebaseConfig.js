// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase Authentication module

// Your Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "cinnamonmaster-87866",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth
const auth = getAuth(app);

export { auth }; // Export auth to use in your app

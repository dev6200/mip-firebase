// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWBd2LDl1uourewe5xnCoUFgMMxvsaP1Q",
  authDomain: "mip-song-collection.firebaseapp.com",
  projectId: "mip-song-collection",
  storageBucket: "mip-song-collection.firebasestorage.app",
  messagingSenderId: "500828902265",
  appId: "1:500828902265:web:4ecc94e2ae77852a80d5a8",
  measurementId: "G-Z1J8SN2V6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

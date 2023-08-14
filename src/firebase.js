import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZHqzPE4cUfTIcUJs6rWoBQNG0DFGvFao",
  authDomain: "chat-93135.firebaseapp.com",
  projectId: "chat-93135",
  storageBucket: "chat-93135.appspot.com",
  messagingSenderId: "499376383344",
  appId: "1:499376383344:web:ab7ef5aa0fef1e0ea99bb5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

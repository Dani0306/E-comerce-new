import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "whatsapp-clone-e6c75.firebaseapp.com",
  projectId: "whatsapp-clone-e6c75",
  storageBucket: "whatsapp-clone-e6c75.appspot.com",
  messagingSenderId: "179598706257",
  appId: "1:179598706257:web:75dbcd2b7f0b927c611a70"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

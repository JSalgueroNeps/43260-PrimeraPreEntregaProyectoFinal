import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSpecw3oA-7Hex8WN1pQg-Ks18dGvdshE",
  authDomain: "workshop-final-71429.firebaseapp.com",
  projectId: "workshop-final-71429",
  storageBucket: "workshop-final-71429.appspot.com",
  messagingSenderId: "334814104145",
  appId: "1:334814104145:web:e7e472e980fa3c32928670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
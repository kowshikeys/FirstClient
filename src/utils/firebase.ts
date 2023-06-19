import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEbhughs6XD7tTJi_0qWtm_3kQs6ksxCI",
  authDomain: "neoai-f8048.firebaseapp.com",
  projectId: "neoai-f8048",
  storageBucket: "neoai-f8048.appspot.com",
  messagingSenderId: "456390651586",
  appId: "1:456390651586:web:4e06bb751356f2db6e555b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

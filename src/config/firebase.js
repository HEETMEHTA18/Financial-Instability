import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAzBXmFErHRK4bUiLd9jUNgrTPbPf8umtU",
  authDomain: "financial-instability.firebaseapp.com",
  projectId: "financial-instability",
  storageBucket: "financial-instability.appspot.com",
  messagingSenderId: "898123239061",
  appId: "1:898123239061:web:YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

export default app; 
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.VITE_API_FIREBASE_API_KEY,
  authDomain: process.env.VITE_API_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_API_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_API_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_API_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(app);

export { app, auth, database };

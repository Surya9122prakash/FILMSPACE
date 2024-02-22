import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAn88rm2lO0g2Q4jT0zf7imymPW8rfakmM',
  authDomain: 'preprodai.firebaseapp.com',
  projectId: 'preprodai',
  storageBucket: 'preprodai.appspot.com',
  messagingSenderId: '873716532171',
  appId: '1:873716532171:web:e3bc9d7dee696a7f87ec4e',
  measurementId: 'G-MEYGLFV116',
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

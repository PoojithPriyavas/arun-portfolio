import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy, limit } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSTWtSyWDn9YAu_Lmf5pAVoW9EGoxyHC4",
  authDomain: "arun-c3893.firebaseapp.com",
  projectId: "arun-c3893",
  storageBucket: "arun-c3893.firebasestorage.app",
  messagingSenderId: "738350875101",
  appId: "1:738350875101:web:dcfd414dfa7d1157d97634"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
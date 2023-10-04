import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu242tyIxVuBUOVn-Pn2-cPbox38g39CM",
  authDomain: "chat-app-59304.firebaseapp.com",
  projectId: "chat-app-59304",
  storageBucket: "chat-app-59304.appspot.com",
  messagingSenderId: "213331270878",
  appId: "1:213331270878:web:59b9057c4c3096736f764f",
  measurementId: "G-H8WNBF1TYN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore(app);

// export { app };
// export { analytics };
// export { db };
// export { storage };

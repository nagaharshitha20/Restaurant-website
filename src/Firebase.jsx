import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAozXvMTIUUXO7cO00nwUiiM7Ieayqb1B4",
  authDomain: "heavenlyte-33988.firebaseapp.com",
  projectId: "heavenlyte-33988",
  storageBucket: "heavenlyte-33988.firebasestorage.app",
  messagingSenderId: "999908619126",
  appId: "1:999908619126:web:9eb933adf2f573ff764057",
  measurementId: "G-6XF33XM2RM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);
export {auth,db};
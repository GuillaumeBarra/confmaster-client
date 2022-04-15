import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDUh9kOMf194Oe4e11AK-A1xKoRjmnd8vA",
    authDomain: "confmaster-92a63.firebaseapp.com",
    databaseURL: "https://confmaster-92a63-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "confmaster-92a63",
    storageBucket: "confmaster-92a63.appspot.com",
    messagingSenderId: "378458958561",
    appId: "1:378458958561:web:9bf70f85d44d079b5665a0",
    measurementId: "G-808N9T53SK"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)
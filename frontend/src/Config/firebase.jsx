import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAD130MSulGYF-BGEhmwYRvguYr4Pi-Z1Y",
  authDomain: "e-commerce-mern-deab7.firebaseapp.com",
  projectId: "e-commerce-mern-deab7",
  storageBucket: "e-commerce-mern-deab7.appspot.com",
  messagingSenderId: "684875737645",
  appId: "1:684875737645:web:5f9ab4978ec4e9877fe6a4",
  measurementId: "G-YRP1BKN7TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

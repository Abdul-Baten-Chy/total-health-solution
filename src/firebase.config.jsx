import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCq_IBBJALSqLQ060KTfTMijMEKuFmQ0Hw",
  authDomain: "health-fair-a5bdf.firebaseapp.com",
  projectId: "health-fair-a5bdf",
  storageBucket: "health-fair-a5bdf.appspot.com",
  messagingSenderId: "704186771538",
  appId: "1:704186771538:web:10049336f8bfda8652d78b"
};


const app = initializeApp(firebaseConfig);
export default app;
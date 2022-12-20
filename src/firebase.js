// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYDCNNjs7eg_0DCr3P5TLWkd6zFutGx6w",
  authDomain: "shop-ba084.firebaseapp.com",
  projectId: "shop-ba084",
  storageBucket: "shop-ba084.appspot.com",
  messagingSenderId: "374648490508",
  appId: "1:374648490508:web:0e3446dcabd6616216fc29",
  measurementId: "G-EHWDEMTVNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;






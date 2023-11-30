// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-aBqdkwqJ5R-ezYP79RMmauU6wuarhH8",
    authDomain: "food-restaurant-a11.firebaseapp.com",
    projectId: "food-restaurant-a11",
    storageBucket: "food-restaurant-a11.appspot.com",
    messagingSenderId: "716250892647",
    appId: "1:716250892647:web:73169fd72d0ba52fcc47c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
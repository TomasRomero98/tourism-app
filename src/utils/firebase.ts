import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyAi0YY7syQ8yqyvn4KqZ60cwVSA6LbEnAM",
  authDomain: "tourism-app-8be00.firebaseapp.com",
  projectId: "tourism-app-8be00",
  storageBucket: "tourism-app-8be00.appspot.com",
  messagingSenderId: "366247090086",
  appId: "1:366247090086:web:ed26f800aedf49ca782167",
  measurementId: "G-Y7XJY7JWQT",
};

export const app = initializeApp(config);
export const db = getFirestore(app); // colecciones y documentos en la base de datos NoSQL de Firebase
export const mediaStorage = getStorage(app); //archivos como imágenes o videos

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDC25bl7xMgt3CDSu4__PVHUQaOaC0nEdo",
  authDomain: "miniblog-11a77.firebaseapp.com",
  projectId: "miniblog-11a77",
  storageBucket: "miniblog-11a77.appspot.com",
  messagingSenderId: "1069828274496",
  appId: "1:1069828274496:web:a65a9125b5d1f9938f62a5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//exportando o banco de dados
export { db };

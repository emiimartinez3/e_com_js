
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR1rMNAWxmRTpYhRooZbbGQotVKX-LVBE",
  authDomain: "e-comreact-2928f.firebaseapp.com",
  projectId: "e-comreact-2928f",
  storageBucket: "e-comreact-2928f.appspot.com",
  messagingSenderId: "1051867010657",
  appId: "1:1051867010657:web:348a7195937e53cda73c20"
};


const app = initializeApp(firebaseConfig);

const dataBaseFS = getFirestore(app)

export default dataBaseFS;
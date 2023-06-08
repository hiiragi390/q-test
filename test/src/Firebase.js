import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//初期化ファイル
const firebaseConfig = {
    apiKey: "AIzaSyCKoESI7aBUuIG31NzXAXdTspgXWpav-0c",
    authDomain: "first-test-33283.firebaseapp.com",
    projectId: "first-test-33283",
    storageBucket: "first-test-33283.appspot.com",
    messagingSenderId: "428297428973",
    appId: "1:428297428973:web:692b4ce29a11d2aa1251e4",
    measurementId: "G-FSJW5YMG9N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
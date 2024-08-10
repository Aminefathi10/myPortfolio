import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOw5tluoIwW-sVdxD8-ojrMot-kfEsiro",
    authDomain: "x-clone-react.firebaseapp.com",
    projectId: "x-clone-react",
    storageBucket: "x-clone-react.appspot.com",
    messagingSenderId: "317360485642",
    appId: "1:317360485642:web:d7aaab72ccfc4cb19ff6f3"
  };

initializeApp(firebaseConfig);
const db = getFirestore();
  
export { db };
  
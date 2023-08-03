import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDMWWNA-XUKtdrx9H9mKqtuKxs2a-3Ocso",
    authDomain: "nwitter-26c67.firebaseapp.com",
    projectId: "nwitter-26c67",
    storageBucket: "nwitter-26c67.appspot.com",
    messagingSenderId: "936832823920",
    appId: "1:936832823920:web:9e356b5a65453fe0e87ab5"
};


const app = initializeApp(firebaseConfig);
export const authService = getAuth();




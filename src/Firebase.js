import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWQYgn6PPhl5rncRCc8qQUFJJoRF-KACQ",
  authDomain: "earningzone-192e1.firebaseapp.com",
  projectId: "earningzone-192e1",
  storageBucket: "earningzone-192e1.appspot.com",
  messagingSenderId: "616278789619",
  appId: "1:616278789619:web:32d0decb92ea49182e5686",
  measurementId: "G-VVQZY5E0ZF",
  databaseURL: "https://earningzone-192e1-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);

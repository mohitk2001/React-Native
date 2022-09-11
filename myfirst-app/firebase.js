// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqJC2oFMAA8OVG1aXEobbWOyhFV7HbShA",
  authDomain: "rn-insta-c2d9c.firebaseapp.com",
  projectId: "rn-insta-c2d9c",
  storageBucket: "rn-insta-c2d9c.appspot.com",
  messagingSenderId: "92120161581",
  appId: "1:92120161581:web:71786e1fe87018c5a8c7a4"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase
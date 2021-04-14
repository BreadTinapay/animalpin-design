import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyATSbKk-5LEOH9oe_tCe8mCmMHk6iNG1Ik",
    authDomain: "bread-works-corporation.firebaseapp.com",
    projectId: "bread-works-corporation",
    storageBucket: "bread-works-corporation.appspot.com",
    messagingSenderId: "398572477328",
    appId: "1:398572477328:web:97d8940813bc80786ef115",
    measurementId: "G-NSTJ5XJSH3"
  };

   // Initialize Firebase
   firebase.initializeApp(config);
   firebase.analytics();

   export default firebase
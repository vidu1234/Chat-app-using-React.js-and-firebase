// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyAwgOGUnpvhxm--N2AJyjA_YlVhBIethZs",
//   authDomain: "chat-app-73456.firebaseapp.com",
//   projectId: "chat-app-73456",
//   storageBucket: "chat-app-73456.appspot.com",
//   messagingSenderId: "552116077524",
//   appId: "1:552116077524:web:8fd76e22b9ec3e7a814c41",
//   measurementId: "G-3W5SRLJ7JB",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;

import firebase from "firebase";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwgOGUnpvhxm--N2AJyjA_YlVhBIethZs",
  authDomain: "chat-app-73456.firebaseapp.com",
  projectId: "chat-app-73456",
  storageBucket: "chat-app-73456.appspot.com",
  messagingSenderId: "552116077524",
  appId: "1:552116077524:web:8fd76e22b9ec3e7a814c41",
  measurementId: "G-3W5SRLJ7JB",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

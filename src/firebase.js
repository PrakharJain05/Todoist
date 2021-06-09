import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8lCK33rHpyukFviNIjb_cKkRzme0EW6g",
  authDomain: "todoist-d346b.firebaseapp.com",
  databaseURL: "https://todoist-d346b.firebaseio.com",
  projectId: "todoist-d346b",
  storageBucket: "todoist-d346b.appspot.com",
  messagingSenderId: "213064210983",
  appId: "1:213064210983:web:73255e166299b5631ccc02",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

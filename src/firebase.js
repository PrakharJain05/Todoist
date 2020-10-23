import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT0AuLXnn3BNtB1NSjNFG62QWFw18x90A",
  authDomain: "todoist-dc2b0.firebaseapp.com",
  databaseURL: "https://todoist-dc2b0.firebaseio.com",
  projectId: "todoist-dc2b0",
  storageBucket: "todoist-dc2b0.appspot.com",
  messagingSenderId: "140476300162",
  appId: "1:140476300162:web:6a977bb165328ab0416d9b",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

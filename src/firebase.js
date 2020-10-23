import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNuiMykLkGQM3kaOZTf3UKwKBw8ATZWN8",
  authDomain: "todoist-3f99b.firebaseapp.com",
  databaseURL: "https://todoist-3f99b.firebaseio.com",
  projectId: "todoist-3f99b",
  storageBucket: "todoist-3f99b.appspot.com",
  messagingSenderId: "656714702669",
  appId: "1:656714702669:web:6204ba5c040bac8c62e104"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBlo9Yhywze36wBFXi0O2f4rbAuQg6MweM",
  authDomain: "goal-coach-22341.firebaseapp.com",
  databaseURL: "https://goal-coach-22341.firebaseio.com",
  projectId: "goal-coach-22341",
  storageBucket: "",
  messagingSenderId: "864968830437"
};

export const firebaseApp = firebase.initializeApp(config);

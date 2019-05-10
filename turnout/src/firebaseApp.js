import firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAjhf47TRBl96rjfZwmpE-Mtz8Kfbok39A",
  authDomain: "turnout-fa1db.firebaseapp.com",
  databaseURL: "https://turnout-fa1db.firebaseio.com",
  projectId: "turnout-fa1db",
  storageBucket: "turnout-fa1db.appspot.com",
  messagingSenderId: "341340663531",
  appId: "1:341340663531:web:69a851a9b8efcef1"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');

import { initializeTestApp } from '@firebase/rules-unit-testing';
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const getFirebaseApp = () => {
  if (process.env.DEBUG_TEST) {
    //if (firebaseTesting.apps().length) return firebaseTesting.apps()[0];
    return initializeTestApp({
      auth: { uid: 'gustavo', email: 'gustavojobs.dev@gmail.com' },
      projectId: firebaseConfig.projectId,
      databaseName: 'my-database',
      ...firebaseConfig
    });
  } else {
    if (firebase.apps.length) return firebase.apps[0];
    return firebase.initializeApp(firebaseConfig);
  }
};

// firebase.initializeApp(firebaseConfig);

const firebaseApp = getFirebaseApp();
const auth = firebaseApp.auth();
const database = firebaseApp.database();

export { firebase, firebaseApp, auth, database };

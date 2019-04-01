import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: 'AIzaSyD9rmcBtDEiQ5Zt4Rsv6OrwS1ZObsJwbAI',
  authDomain: 'dudewheresmytruck-f2b38.firebaseapp.com',
  databaseURL: 'https://dudewheresmytruck-f2b38.firebaseio.com',
  projectId: 'dudewheresmytruck-f2b38',
  storageBucket: 'dudewheresmytruck-f2b38.appspot.com',
  messagingSenderId: '233486582176'
});

export const app = firebase;

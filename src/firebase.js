import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVF1BYXSPpeLWKiev_wiSeVqFhqCY-xPk",
    authDomain: "crud-a4298.firebaseapp.com",
    projectId: "crud-a4298",
    storageBucket: "crud-a4298.appspot.com",
    messagingSenderId: "342794172281",
    appId: "1:342794172281:web:6a63700f5b77da18ee61a8"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
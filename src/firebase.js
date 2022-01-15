import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDY1-ijhPxJaSS66klbX_oWx3RPC5OevKc",
  authDomain: "twiiter-fea91.firebaseapp.com",
  projectId: "twiiter-fea91",
  storageBucket: "twiiter-fea91.appspot.com",
  messagingSenderId: "349657889008",
  appId: "1:349657889008:web:7681177e997dc14c9b2a35",
  measurementId: "G-046RLETM7L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider }

export default db
import Firebase from 'firebase'
var config = {
  apiKey : "AIzaSyAFL-ImGIlREbPgZ26R-l7w4UG4qU_qASI",
  authDomain : "library-db2ec.firebaseapp.com",
  databaseURL : "https://library-db2ec.firebaseio.com",
  projectId : "library-db2ec",
  storageBucket : "library-db2ec.appspot.com",
  messagingSenderId : "327995204290"
}
const firebaseApp = Firebase.initializeApp(config)

export const db = firebaseApp.database()
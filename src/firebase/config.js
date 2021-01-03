import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJz9ZZudJDYkSmxeEOhrsw7L-UR7HAssQ",
  authDomain: "vue-firebase-sites-2fb1e.firebaseapp.com",
  projectId: "vue-firebase-sites-2fb1e",
  storageBucket: "vue-firebase-sites-2fb1e.appspot.com",
  messagingSenderId: "93169550773",
  appId: "1:93169550773:web:cfaaac4988f178c90885fc"
};

//** init firebase */
firebase.initializeApp(firebaseConfig)

//** init firestore service */
const projectFirestore = firebase.firestore()

export { projectFirestore }
import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6Xy_prJLcYDLuGYY2I-gqqsP_T5JU6gk',
  authDomain: 'les-petales-de-lotus-adf50.firebaseapp.com',
  databaseURL: 'https://les-petales-de-lotus-adf50.firebaseio.com',
  projectId: 'les-petales-de-lotus-adf50',
  storageBucket: 'les-petales-de-lotus-adf50.appspot.com',
  messagingSenderId: '273785277725',
  appId: '1:273785277725:web:c6eefc65a1e415faf7e5f4',
  measurementId: 'G-N1BYHBBSFZ'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

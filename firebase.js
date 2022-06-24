import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyBlSNAj_9JGF7UO7epNHqU8N8OnKJBQlGA",
  authDomain: "coffeestart-cc361.firebaseapp.com",
  projectId: "coffeestart-cc361",
  storageBucket: "coffeestart-cc361.appspot.com",
  messagingSenderId: "6943021430",
  appId: "1:6943021430:web:55d6b7aa6406397abc0257"
}

let app
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  })
} else {
  app = getApps()
}

const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db }
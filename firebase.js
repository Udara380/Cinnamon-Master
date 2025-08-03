import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBfdkGA4qBDh1dFkJ0sL70_lIwICtQJvds',
  authDomain: 'cinnamon-master-f67bb.firebaseapp.com',
  projectId: 'cinnamon-master-f67bb',
  storageBucket: 'cinnamon-master-f67bb.appspot.com',
  messagingSenderId: '824998733194',
  appId: '1:824998733194:android:f9fb062d6410f4ee24d473',
  databaseURL: "https://cinnamon-master-f67bb-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };

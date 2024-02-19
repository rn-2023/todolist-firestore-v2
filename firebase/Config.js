import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Add here the database configuration values
const firebaseConfig = ({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const TODOS_REF = 'todos';
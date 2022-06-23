import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

var firebaseConfig = {
	apiKey: 'AIzaSyBPzWJ6aNG5I9wismxQ7WTV_sNGVKvgiAw',
	authDomain: 'hpo-stack.firebaseapp.com',
	projectId: 'hpo-stack',
	storageBucket: 'hpo-stack.appspot.com',
	messagingSenderId: '1093372933868',
	appId: '1:1093372933868:web:5cd131011105648e5f57c9',
	measurementId: 'G-VRJCX487D4',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAWoX1nOZF1ye5afl5DUWFntyutmugWEr4',
	authDomain: 'fir-test-be0ce.firebaseapp.com',
	projectId: 'fir-test-be0ce',
	storageBucket: 'fir-test-be0ce.firebasestorage.app',
	messagingSenderId: '561887086',
	appId: '1:561887086:web:8555e6b9107a611616737f'
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApZXeYI4FlzQQPFKDZVNLIdLkZKa5qrJ4',
  authDomain: 'indianvotingapp-c6ada.firebaseapp.com',
  projectId: 'indianvotingapp-c6ada',
  storageBucket: 'indianvotingapp-c6ada.appspot.com',
  messagingSenderId: '511955632104',
  appId: '1:511955632104:web:2674078c908f7648a8ae5d',
  measurementId: 'G-QHZ9FLDEQK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};

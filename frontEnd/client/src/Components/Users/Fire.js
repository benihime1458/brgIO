import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2S38idHcwIjDpQyuu59YkMDbQPGb02EE",
  authDomain: "brgio-auth.firebaseapp.com",
  databaseURL: "https://brgio-auth.firebaseio.com",
  projectId: "brgio-auth",
  storageBucket: "",
  messagingSenderId: "58725252911",
  appId: "1:58725252911:web:c4d710de72ef8a96"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
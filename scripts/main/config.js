// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcTsdNM48Ts1t5JTNdDby8281e7s7REDE",
  authDomain: "simforum-login.firebaseapp.com",
  databaseURL: "https://simforum-login-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simforum-login",
  storageBucket: "simforum-login.appspot.com",
  messagingSenderId: "311465979099",
  appId: "1:311465979099:web:8ded10990bee13bfb770fe",
  measurementId: "G-WP0XZT3CHT"
};

// BIAR GA KELAMAAN PAS MAU PANGGIL NANTI
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const rdb = firebase.database();
const stg = firebase.storage();


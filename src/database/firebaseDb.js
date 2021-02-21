// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8V_b2LTss7r-ztAjOW0MBGTsb8H3Lz34",
    authDomain: "myhealth15.firebaseapp.com",
    projectId: "myhealth15",
    storageBucket: "myhealth15.appspot.com",
    messagingSenderId: "356602451112",
    appId: "1:356602451112:web:ac4795e66d19f09d5f9e9d",
    measurementId: "G-M0VR85QZMJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
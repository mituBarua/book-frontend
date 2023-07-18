import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    //   apiKey: import.meta.env.VITE_apiKey,
    //   authDomain: import.meta.env.VITE_authDomain,
    //   projectId: import.meta.env.VITE_projectId,
    //   storageBucket: import.meta.env.VITE_storageBucket,
    //   messagingSenderId: import.meta.env.VITE_messagingSenderId,
    //   appId: import.meta.env.VITE_appId,
    apiKey: "AIzaSyCBZ5vMx-jRLxEoB1FcCP4XgBQ-n0trSxU",
    authDomain: "technet-f0b81.firebaseapp.com",
    projectId: "technet-f0b81",
    storageBucket: "technet-f0b81.appspot.com",
    messagingSenderId: "22086924555",
    appId: "1:22086924555:web:f24f9a3035ad71715a0a0e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

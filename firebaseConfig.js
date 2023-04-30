import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyALt1NrVCtVcuk-rJZvE5JVL8mR1pQDs2A",
    authDomain: "cwpapp-308ab.firebaseapp.com",
    projectId: "cwpapp-308ab",
    storageBucket: "cwpapp-308ab.appspot.com",
    messagingSenderId: "75154771017",
    appId: "1:75154771017:web:3b08a50dbeafadfb1e8398",
    measurementId: "G-72V5NPSNTK"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const analytics = getAnalytics(app);

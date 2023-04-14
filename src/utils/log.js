import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAuZtrG4X3dHDrTCXZoBTbEwhk8xGBydH8",
  authDomain: "portfolio-e3b94.firebaseapp.com",
  projectId: "portfolio-e3b94",
  storageBucket: "portfolio-e3b94.appspot.com",
  messagingSenderId: "177212568870",
  appId: "1:177212568870:web:979b4957700ef61727bde7",
  measurementId: "G-TMWS4CQLP1"
};


const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};

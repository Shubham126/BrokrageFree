
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIIkDAVXeqclVvUahz5LvO7sGaj9JsDcY",
  authDomain: "brokragefree-dd436.firebaseapp.com",
  projectId: "brokragefree-dd436",
  storageBucket: "brokragefree-dd436.firebasestorage.app",
  messagingSenderId: "224064260630",
  appId: "1:224064260630:web:07d578e348d295e82e8337",
  measurementId: "G-LVYJGMJJS4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
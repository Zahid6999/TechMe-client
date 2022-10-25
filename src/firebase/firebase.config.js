// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6T49n-vhTc57rKUQSXiAeJd_BQprXU9s",
  authDomain: "techme-web.firebaseapp.com",
  projectId: "techme-web",
  storageBucket: "techme-web.appspot.com",
  messagingSenderId: "442691612302",
  appId: "1:442691612302:web:9a18482463e8bec02623df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
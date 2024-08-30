import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCqBD_w3D_yiV2w63rlLoH8ZSqRPS-wCM",
  authDomain: "gallery-360-africa.firebaseapp.com",
  projectId: "gallery-360-africa",
  storageBucket: "gallery-360-africa.appspot.com",
  messagingSenderId: "977191750253",
  appId: "1:977191750253:web:e904658e10a43b0e5fcd64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

// Export Firebase services
export { app, auth, firestore, storage };

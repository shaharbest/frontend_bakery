import { auth } from "./config/firebase";
import {
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup
} from "firebase/auth";

class Auth {
  constructor() {
    this.currentUser = null;

    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
    });
  }

  getCurrentUser = () => this.currentUser;

  onUserChanged = (cb) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      cb();
    });

    return unsubscribe;
  };

  signup = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass);
  };

  login = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass);
  };

  logout = () => {
    signOut(auth);
  };

  isAuthenticated = () => {
    return !!this.currentUser;
  };

  popUpGoogleAuth = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
  }

  popUpFacebookAuth = () => {
    signInWithPopup(auth, new FacebookAuthProvider())
  }
}

export default new Auth();

import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../components/firebase/firebase.config";

export const authContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //Create User With Email and Password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Sign in with Email and Password
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign In with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  //onAuthStateChanged
  useEffect(() => {
    const unSubscribe = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        console.log("auth state changed", currentUser);
      });
    return () => {
      unSubscribe();
    };
  }, []);
  const contextValue = {
    user,
    loading,
    registerUser,
    userSignIn,
    signInWithGoogle,
    userSignOut,
  };
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default UserContext;

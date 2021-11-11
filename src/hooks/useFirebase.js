import { useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import initializeFirebaseApp from '../Firebase/firebase.init';

//initialize firebase app
initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  //register new user
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((err) => {
        const error = err.message;
        setError(error);
      })
      .finally(()=>setIsLoading(false));
  };

  //login with email and password

  const loginWithEmail = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError("");
      })
      .catch((err) => {
        const error = err.message;
        setError(error);
      }).finally(()=>setIsLoading(false));
  };

//   google login

const loginWithGoogle = (email, password) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
  .then((result) => {

    const user = result.user;
    setUser(user);
    setError('')
    // ...
  }).catch((error) => {

    const errorMessage = error.message;
    setError(errorMessage);

  });
}
  //   observe user presence

  useEffect(() => {
    const unsubscribe = 
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
    return () => unsubscribe;
  }, []);

  //   logout user

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((err) => {
        const error = err.message;
        setError(error);

      }).finally(()=>setIsLoading(false));
  };

  return {
    user,
    isLoading,
    registerUser,
    loginWithGoogle,
    error,
    logOut,
    loginWithEmail,
  };
};

export default useFirebase;

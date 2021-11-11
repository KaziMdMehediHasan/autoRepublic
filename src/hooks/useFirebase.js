import { useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import initializeFirebaseApp from '../Firebase/firebase.init';

//initialize firebase app
initializeFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  //register new user
  const registerUser = (name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const newUser = {email, displayName: name};
        setUser(newUser);
        setError("");
        // save user to database

        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
            displayName: name
          })
          .then(() => {
          })
          .catch((error) => {
          });
          
        
        history.replace("/");
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

const loginWithGoogle = (location, history) => {
  setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    setError('')
    saveUser(user.email, user.displayName, "PUT");
    const destination = location?.state?.from || '/';
    history.replace(destination);
    
    // ...
  }).catch((err) => {

    const error = err.message;
    setError(error);

  })
  .finally(()=>setIsLoading(false));
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


  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res=>res.json())
    .then(data => {
      setAdmin(data.admin);
    })
  },[user.email])
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

  const saveUser =(email, displayName, method) => {
    const user = {email, displayName};
    fetch('http://localhost:5000/users',{
      method: method,
      headers:{
        "content-type": "application/json",
      },
      body: JSON.stringify(user)
    }).then();
  }

  return {
    user,
    admin,
    isLoading,
    registerUser,
    loginWithGoogle,
    error,
    logOut,
    loginWithEmail,
  };
};

export default useFirebase;

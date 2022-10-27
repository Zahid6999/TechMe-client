import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
       
    //    google sign in
   const signInProvider = (provider) => {
      return  signInWithPopup(auth, provider)
   }

//    createUser 
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
// signInUser
const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

//    github sign is 
const githubSignInProvider = (provider) => {
    return signInWithPopup(auth, provider)
}

//   Log out 
const logOut = () => {
    return signOut(auth)
}

//   manage to user  
  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('auth user ',currentUser);
        setUser(currentUser)
    });

    return () => {
        unSubscribe();
    } 
  },[])
    // AuthInfo --- means All application to access
    const authInfo = {user, signInProvider, logOut, githubSignInProvider, createUser, signInUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
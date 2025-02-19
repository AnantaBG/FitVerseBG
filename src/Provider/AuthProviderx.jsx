/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.init";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthC = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProviderx = ({ children }) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const updateP = (updatedData) => {
        return updateProfile(auth.currentUser , updatedData)
    }
const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    logIn,
    loading,
    updateP,
    googleSignIn
};
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }
}, [])
    return <AuthC.Provider value={authInfo}>{ children }</AuthC.Provider>
};

export default AuthProviderx;
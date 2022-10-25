import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const authContext = createContext();

const Auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const providerLogin = (provider)=>{
        return signInWithPopup(Auth,provider)
    }
    const logOut=()=>{
        return signOut(Auth)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(Auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(Auth, currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo = { user,providerLogin ,logOut, createUser,signIn}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
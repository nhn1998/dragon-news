import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const authContext = createContext();

const Auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const providerLogin = (provider)=>{
        setLoading(true)
        return signInWithPopup(Auth,provider)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(Auth)
    }
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(Auth,email,password)
    }
    const updateProfileForm= (profile)=>{
        return updateProfile(user);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(Auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo = { user,loading,updateProfileForm,providerLogin ,logOut, createUser,signIn}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
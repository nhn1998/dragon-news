import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const authContext = createContext();

const Auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const providerLogin = (provider)=>{
        return signInWithPopup(Auth,provider)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(Auth, currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo = { user,providerLogin }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebaseClient'
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

export const Context = createContext();

export function AuthContext({children}){
    const [authUser, setAuthUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);

    };

    const logOut = () => {
        signOut(auth);
    };
    useEffect(() => {
        let listen
        listen = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                
                 console.log(loading);
                setAuthUser(user);
                console.log("success");
                console.log(loading);
            } else {
                setAuthUser(null);
                console.log(loading);
            }
        })

        return () => {
            if(listen)listen();
        }
    },[])

    useEffect(() => {
        const checkAuthentication = async() => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false)
            checkAuthentication
        }
    },[authUser])
    const values = {
        user: authUser,
        setUser: setAuthUser,
        googleSignIn: googleSignIn,
        logOut: logOut
    }
  return <Context.Provider value={values}>
    {! loading &&
        children
    }
  </Context.Provider>
}

export const userAuth = () =>{
    return useContext(Context)
}


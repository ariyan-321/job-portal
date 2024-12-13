/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/firebase";


export const authContext=createContext()

export default function AuthProvider({children}) {


  const[user,setUser]=useState([]);
  const[loading,setLoading]=useState(false)
 
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    
  }

 
  const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const userLogout=()=>{
    return signOut(auth)
  }


  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo={
    user,
    setUser,
    loading,
    createUser,
    updateUserProfile,
    userLogin,
    userLogout
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      setLoading(false)
    })

    return()=>{
      unSubscribe();
    }
  },[])


  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  )
}

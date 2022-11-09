import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export const AuthContext=createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading]=useState(true);

    const createUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
     }
  
    const LogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogIn=(provider)=>{
        return signInWithPopup(auth,provider);
     }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
         
       //   console.log(currentUser);
         setUser(currentUser);
         setLoading(false)
        })
        return ()=>{
         unsubscribe();
        }
     },[])
    const authInfo={user,createUser,LogIn,googleLogIn}
    return (
   
        <AuthContext.Provider value ={authInfo}>
          {children}
         </AuthContext.Provider>
        
    );
};

export default Authprovider;
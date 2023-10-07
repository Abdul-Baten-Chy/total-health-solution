import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import app from "../../firebase.config";

export const MyContextProvider = createContext(null);
const MyContext = ({children}) => {
    const [user, setUser]=useState(null);
    const auth = getAuth(app);
    const handleRegister=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSignIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const handleSignOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();}
    },[])
    
    const objOfInfo={handleRegister, handleSignIn, handleSignOut, user}
    return (
        <MyContextProvider.Provider value={objOfInfo}>
            {children}
        </MyContextProvider.Provider>
    );
};

export default MyContext;
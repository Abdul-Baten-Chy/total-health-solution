import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContextProvider } from "../context/MyContext";

const Private = ({children}) => {
    const {user}= useContext(MyContextProvider);
    const location = useLocation();

    if(user){
        return children;
    } else{
        return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
    }
    
};

export default Private;
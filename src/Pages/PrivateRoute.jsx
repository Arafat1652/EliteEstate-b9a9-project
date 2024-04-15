import { useContext } from "react";
import { AuthContext } from "../ForUser/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-spinner loading-lg text-error ml-[650px] mt-10"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
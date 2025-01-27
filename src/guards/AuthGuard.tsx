
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/auth.context";


export const AuthGuard = () => {
    const {isAuth, setIsAuth} = useAuthContext();
    // console.log(isAuth);
    return isAuth ? <Outlet /> : <Navigate to='/login' />;
}
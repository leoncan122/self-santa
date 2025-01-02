

import { AuthContext, emptyAuthContext } from "./auth.context";
import { useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}   

export const AuthProvider = ({children}: AuthProviderProps) => {
    
    const [isAuth, setIsAuth] = useState(emptyAuthContext.isAuth);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )     
}
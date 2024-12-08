

import { AuthContext, emptyAuthContext } from "./auth.context";
import { useState } from "react";


export const AuthProvider = ({children}) => {
    
    const [isAuth, setIsAuth] = useState(emptyAuthContext.isAuth);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )     
}
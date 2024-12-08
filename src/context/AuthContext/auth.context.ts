import { createContext, useContext } from "react";

interface AuthContext {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}

export const emptyAuthContext = {
    isAuth: true,
    setIsAuth: () => {}
}

export const AuthContext = createContext<AuthContext>(emptyAuthContext);


export const useAuthContext = () => {
    const context = useContext<AuthContext>(AuthContext);

    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }

    return context;
}

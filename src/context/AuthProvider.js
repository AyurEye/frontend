import { createContext, useState } from "react";
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { cookieArray } from "../utils/cookies";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [cookies, setCookie] = useCookies(cookieArray);

    const [auth, setAuth] = useState(null);

    useEffect(() => {
        if (cookies['JWT-Access'] && cookies['JWT-Refresh']) {
            setAuth({ 'access': cookies['JWT-Access'], 'refresh': cookies['JWT-Refresh'] });
        }

    }, [cookies]);


    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
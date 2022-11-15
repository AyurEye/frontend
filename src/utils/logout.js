    export const logout = (auth, removeCookie) => {
        auth.setAuth(null);
        removeCookie('JWT-Access', { path: '/' });
        removeCookie('JWT-Refresh', { path: '/' });
    }
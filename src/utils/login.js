import axios from '../api/axios';
const LOGIN_URL = "api/login/";
//Login and logout function
export const signin = async (userEmail, userPassword, auth, setCookie) => {
    // login using axios
    try {
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({
                username: userEmail,
                password: userPassword,
            }), {
            headers: { 'Content-Type': 'application/json' }
            // withCredentials: true
        }
        );
        let data = await response.data;
        console.log(data);
        // first set the cookie
        setCookie('JWT-Refresh', data.refresh, {
            path: '/'
        });

        setCookie('JWT-Access', data.access, {
            path: '/'
        });
        auth.setAuth({ 'access': data.access, 'refresh': data.refresh });
        console.log(auth);
    } catch (err) {
        console.log(err);
    }

}
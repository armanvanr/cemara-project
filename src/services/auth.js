import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = process.env.REACT_APP_API_URL_LOCAL;

const register = (email, username, namaLembaga, password) => {
    const data = axios.post(`${API_URL}/register`, {
        email,
        username,
        namaLembaga,
        password,
    });
    // console.log(data);
    return data
};

const login = (email, password) => {
    return axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout,
};

export default authService;

import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

class LoginService {
    loginWithGoogle() {
        return axios.get(BASE_URL.concat('/login'));
    }
}

export default new LoginService();
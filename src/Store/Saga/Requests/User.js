import axios from 'axios'

// Aqui são feitos os requests da API do GitHub junto à nossa aplicação, utilizando o método "get"
export function requestGetUser(login) {
    return axios.request({
        method: "get",
        url: `https://api.github.com/users/${login.payload}`
    });
}
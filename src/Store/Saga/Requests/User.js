import axios from 'axios'

export function requestGetUser(login) {
    return axios.request({
        method: "get",
        url: `https://api.github.com/users/${login.payload}`
    });
}
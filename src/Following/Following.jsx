import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';


const Following = () => {
    const findUser = useSelector(state => state.user)
    const [following, setFollowing] = useState("")


    useEffect(() => {
        axios
        .get(
            `https://api.github.com/users/${findUser.login}/following`
        )
        .then((res) => {
            setFollowing(res.data);

        })
        .catch((error) => {
            if (error.res) {
                console.log(error)
            } else if (error.request) {
                console.log(error)
            } else {
                console.log(error)
            }
            console.log(error)
        })
    }, [])  

    return (
        <div>
            <div>
                <Link to="/home">Voltar</Link>
                <p>{findUser.following} Seguindo</p>
            </div>
            <div>
                {
                    following && following.map(users => {
                        const {id, login, avatar_url} = users
                        return (
                            <li key={id}><img alt={login} src={avatar_url}></img> #{login}</li>
                        )
                    }) 
                }
            </div>
        </div>
    );
}


export default Following;
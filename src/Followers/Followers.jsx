import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Followers = () => {
    const findUser = useSelector(state => state.user)
    const [followers, setFollowers] = useState("")


    useEffect(() => {
        axios
            .get(
                `https://api.github.com/users/${findUser.login}/followers`
            )
            .then((res) => {
                setFollowers(res.data);

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
                <div>
                    <Link to="/home">Voltar</Link>
                </div>
                <div>
                    {findUser.followers} Seguidores
                </div>
            </div>
            <div>
                <div>
                    {
                        followers && followers.map(users => {
                            const { id, login, avatar_url } = users
                            return (
                                <li key={id}><img alt={login} src={avatar_url}></img> #{login}</li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Followers;
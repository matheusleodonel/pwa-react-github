import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

import { TopPage, FollowerData } from './Followers.style';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

/* Foi necessário criar um página clone para listar os seguidores dos 'Followers' e 'Following', 
    onde a API é requisitada provisóriamente */
const CloneFollowers = () => {
    const { login } = useParams() // Recebendo o login do 'Followers' ou 'Following' via o método 'Params'
    const [followers, setFollowers] = useState("")

    let history = useHistory() // Utilizando o método 'useHistory' para transitar pelos módulos com valor variável de login

    // Para listar os seguidores, se fez necessário requisitar a API do Github localmente de maneira temporária
    useEffect(() => { //Utilizando o useEffect para evitar looping
        axios
            .get(
                `https://api.github.com/users/${login}/followers` // Endereço da lista de seguidores, de acordo com o login do usuário
            )
            .then((res) => {
                setFollowers(res.data); // Recebendo a lista de seguidores
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
    }, [login])

    return (
        <div>
            <TopPage>
                <div>
                    <Link to="/home"><ArrowBackIcon
                        style={{
                            position: "absolute",
                            left: '6px',
                            top: '20px',
                            color: "#FFFFFF"
                        }}
                    />
                    </Link>
                </div>
                <div>
                    {login.followers} seguidores
                </div>
            </TopPage>
            <div>
                <div>
                    {
                        followers && followers.map(users => {
                            const { id, login, avatar_url } = users
                            return (
                                <FollowerData key={id} onClick={() => history.push(`/followers/user/${login}`)}>
                                    <div>
                                        <img alt={login} src={avatar_url} />
                                    </div>
                                    <div>
                                        #{login}
                                    </div>
                                    <div>
                                        <ArrowForwardIcon />
                                    </div>
                                </FollowerData>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CloneFollowers;
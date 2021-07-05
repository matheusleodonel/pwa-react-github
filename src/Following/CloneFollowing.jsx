import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

import { TopPage, FollowerData } from '../Followers/Followers.style';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

/* Foi necessário criar um página clone para listar os usuários "Following" dos 'Followers' e 'Following', 
    onde a API é requisitada provisóriamente */ 
const CloneFollowing = () => {
    const { login } = useParams() // Recebendo o login do 'Followers' ou 'Following' via o método 'Params'
    const [following, setFollowing] = useState("")

    let history = useHistory() // Utilizando o método 'useHistory' para transitar pelos módulos com valor variável de login

    // Para listar o "following", se fez necessário requisitar a API do Github localmente de maneira temporária
    useEffect(() => {
        axios
            .get(
                `https://api.github.com/users/${login}/following` // Endereço da lista de repositórios de acordo com o login do usuário
            )
            .then((res) => {
                setFollowing(res.data); // Recebendo a lista de "following"
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
                    {login.following} seguindo
                </div>
            </TopPage>
            <div>
                <div>
                    {
                        following && following.map(users => {
                            const { id, login, avatar_url } = users
                            return (
                                <FollowerData key={id} onClick={() => history.push(`/following/user/${login}`)}>
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

export default CloneFollowing;
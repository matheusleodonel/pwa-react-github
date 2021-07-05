import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

import { TopPage, FollowerData } from "../Followers/Followers.style";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// Lista de usuários que o usuário principal está seguindo
const Following = () => {
    const findUser = useSelector(state => state.user) // 'findUser' agora contém todos os dados do usuário fornecido no login
    const [following, setFollowing] = useState("")

    let history = useHistory() // Utilizando o método 'useHistory' para transitar pelos módulos com valor variável de login (ex: linha 66)

    // Para listar o "following", se fez necessário requisitar a API do Github localmente de maneira temporária
    useEffect(() => { //Utilizando o useEffect para evitar looping
        axios
            .get(
                `https://api.github.com/users/${findUser.login}/following` // Endereço da lista de usuários que estão sendo seguidos, de acordo com o login do usuário
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
    }, [findUser.login])

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
                    {findUser.following} seguindo
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


export default Following;
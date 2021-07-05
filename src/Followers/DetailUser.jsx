import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';

import {
    Avatar,
    Menu,
    PessoalInfos,
} from '../Home/Home.style';
import { TopDetail } from './Followers.style';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Módulo criado para mostrar os detalhes de um usuário presente na lista de "Followers" ou "Following"
const DetailUser = () => {
    const [detailUser, setDetailUser] = useState("")
    const { login } = useParams() // Recebendo o login do 'Follower' ou 'Following' via o método 'Params'

    let history = useHistory(); // Utilizando o método 'useHistory' para transitar pelos módulos com valor variável de login

    // Para listar a "home" do usuário temporário, se fez necessário requisitar a API do Github localmente
    useEffect(() => { //Utilizando o useEffect para evitar looping
        axios
            .get(
                `https://api.github.com/users/${login}`
            )
            .then((res) => {
                setDetailUser(res.data); // Recebendo os dados do usuário temporário
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
            <TopDetail>
                <div>
                    <div>
                        <Link to="/home"><ArrowBackIcon
                            style={{
                                left: '6px',
                                top: '20px',
                                color: "#FFFFFF"
                            }}
                        />
                        </Link>
                    </div>
                    <div>
                        <Link to="/">Sair  <ExitToAppIcon
                            style={{
                                color: '#D03434',
                                marginLeft: '2px'
                            }}
                        /></Link>
                    </div>
                </div>
                <div>
                    #{detailUser.login}
                </div>
            </TopDetail>
            <Avatar>
                <img alt="Avatar de Usuário" src={detailUser.avatar_url}></img>
            </Avatar>
            <PessoalInfos>
                <div>
                    {detailUser.name}
                </div>
                <div>
                    <div>{detailUser.email}</div>
                    <div>{detailUser.location}</div>
                </div>
            </PessoalInfos>
            <Menu>
                <div>
                    <a onClick={() => history.push(`/followers/${login}`)}>
                        <div>
                            {detailUser.followers}
                        </div>
                        <div>
                            Seguidores
                        </div>
                    </a>
                </div>
                <div>
                    <a onClick={() => history.push(`/following/${login}`)}>
                        <div>
                            {detailUser.following}
                        </div>
                        <div>
                            Seguindo
                        </div>
                    </a>
                </div>
                <div>
                    <a onClick={() => history.push(`/repositories/${login}`)}>
                        <div>
                            {detailUser.public_repos}
                        </div>
                        <div>
                            Repos
                        </div>
                    </a>
                </div>
            </Menu>
            <PessoalInfos>
                <div>
                    BIO
                </div>
                <div>
                    {detailUser.bio}
                </div>
            </PessoalInfos>
        </div >
    );
};


export default DetailUser;
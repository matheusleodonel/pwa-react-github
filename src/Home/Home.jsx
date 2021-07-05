import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    TopPage,
    Avatar,
    Menu,
    PessoalInfos,
} from './Home.style';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Home = () => {
    const findUser = useSelector(state => state.user)

    return (
        <div>
            <TopPage>
                <div>
                    #{findUser.login}
                </div>
                <div>
                    <Link to="/">Sair  <ExitToAppIcon
                        style={{
                            color: '#D03434',
                            marginLeft: '2px'
                        }}
                    /></Link>
                </div>
            </TopPage>
            <Avatar>
                <img src={findUser.avatar_url}></img>
            </Avatar>
            <PessoalInfos>
                <div>
                    {findUser.name}
                </div>
                <div>
                    <div>{findUser.email}</div>
                    <div>{findUser.location}</div>
                </div>
            </PessoalInfos>
            <Menu>
                <div>
                    <Link to="/followers">
                        <div>
                            {findUser.followers}
                        </div>
                        <div>
                            Seguidores
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/following">
                        <div>
                            {findUser.following}
                        </div>
                        <div>
                            Seguindo
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/repositories">
                        <div>
                            {findUser.public_repos}
                        </div>
                        <div>
                            Repos
                        </div>
                    </Link>
                </div>
            </Menu>
            <PessoalInfos>
                <div>
                    BIO
                </div>
                <div>
                    {findUser.bio}
                </div>
            </PessoalInfos>
        </div >
    );
};


export default Home;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
    TopPage,
    Avatar,
    Menu,
    PessoalInfos,
} from '../Home/Home.style';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const DetailFollower = () => {
    const [detailUser, setDetailUser] = useState("")
    const { login } = useParams()

    useEffect(() => {
        axios
            .get(
                `https://api.github.com/users/${login}`
            )
            .then((res) => {
                setDetailUser(res.data);
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
            <TopPage>
                <div>
                    #{detailUser.login}
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
                <img src={detailUser.avatar_url}></img>
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
                    <Link to="/followers">
                        <div>
                            {detailUser.followers}
                        </div>
                        <div>
                            Seguidores
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/following">
                        <div>
                            {detailUser.following}
                        </div>
                        <div>
                            Seguindo
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/repositories">
                        <div>
                            {detailUser.public_repos}
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
                    {detailUser.bio}
                </div>
            </PessoalInfos>
        </div >
    );
};


export default DetailFollower;
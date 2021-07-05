import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    TopPage,
    ReposList,
    Container
} from './Repositories.style';

import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

const Repositories = () => {
    const findUser = useSelector(state => state.user)
    const [repositories, setRepositories] = useState("")

    useEffect(() => {
        axios
            .get(
                `https://api.github.com/users/${findUser.login}/repos`
            )
            .then((res) => {
                setRepositories(res.data);

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
                    <Link to="/home"><ArrowBackIcon
                        style={{
                            position: "absolute",
                            left: '6px',
                            top: '20px',
                            color: "#FFFFFF"
                        }}
                    /></Link>
                </div>
                <div>
                    {findUser.public_repos} repositórios
                </div>
            </TopPage>
            <Container>
                {
                    repositories && repositories.map(repos => {
                        const { id, name, description, stargazers_count } = repos
                        return (

                            <ReposList key={id}>
                                <div>
                                    {name}
                                </div>
                                <div>
                                    {description}
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <StarOutlineIcon
                                                style={{
                                                    color: "yellow"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            {stargazers_count}
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <LockOpenIcon
                                                style={{
                                                    color: "#63BF1F"
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <LockIcon
                                                style={{
                                                    color: "#CC042A"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </ReposList>
                        )
                    })
                }
            </Container>
        </div>
    );
}


export default Repositories;
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

import { TopPage, FollowerData } from "../Followers/Followers.style";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Following = () => {
    const findUser = useSelector(state => state.user)
    const [following, setFollowing] = useState("")

    let history = useHistory()

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
                    {findUser.following} Seguindo
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
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const findUser = useSelector(state => state.user)
    console.log(findUser)
    return (
        <div>
            <h1>
                Login: {findUser.login}
                <br></br>
                Avatar: {findUser.avatar_url}
            </h1>
        </div>
    );
};


export default Home;
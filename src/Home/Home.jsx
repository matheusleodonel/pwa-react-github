import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => {
    const findUser = useSelector(state => state.user)

    let history = useHistory();

    function exitApp() {
        history.push("/");
    }

    return (
        <div>
            <div>
                #{findUser.login}
            </div>
            <div>
                <button onClick={() => exitApp()}>Sair</button>
            </div>
            <div>
                <img src={findUser.avatar_url}></img>
            </div>
            <div>
                <Link to="/followers">{findUser.followers} Seguidores</Link>
                <Link to="/following">{findUser.following} Seguindo</Link>
                <Link to="/repositories">{findUser.public_repos} Repos</Link>
            </div>
            <div>
                <p>BIO</p>
                <p>{findUser.bio}</p>
            </div>
        </div>
    );
};


export default Home;
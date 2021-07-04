import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';


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
            <div>
                <Link to="/home">Voltar</Link>
                <p>{findUser.repos} Respositórios</p>
            </div>
            <div>
                {
                    repositories && repositories.map(repos => {
                        const {id, name, description, stargazers_count} = repos
                        return (
                            <li key={id}> {name} {description} {stargazers_count}</li>
                        )
                    }) 
                }
            </div>
        </div>
    );
}


export default Repositories;
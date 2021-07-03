import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getUser } from "../Store/Ducks/User";
import { useDispatch } from 'react-redux';


const Login = () => {
    const [login, setLogin] = useState(""); //Receber o que o usuário digitou no input
    const dispatch = useDispatch()
    
    let history = useHistory();
    
    function handleClick() { // Requisitar o login de usuário para a API do GitHub
        dispatch(getUser(login))
        
        history.push("/home");
    }

    return (
        <div>
                <input onChange={(e) => setLogin(e.target.value)} id="login" value={login} name="login" required placeholder="Usuário"></input>
                <br></br>
                <button onClick={() => handleClick()} type="submit">Entrar</button>
        </div>
    );
};



export default Login;
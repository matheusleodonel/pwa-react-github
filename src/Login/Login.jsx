import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { getUser } from "../Store/Ducks/User";
import { useDispatch } from 'react-redux';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
    LoginDiv,
    Input,
    Button,
    Icon,
} from './Login.style';

const Login = () => {
    const [login, setLogin] = useState(""); //Receber o que o usuário digitou no input
    const dispatch = useDispatch()

    let history = useHistory();

    function handleClick() { // Requisitar o login de usuário para a API do GitHub

        dispatch(getUser(login))

        history.push("/home");
    }

    return (
        <LoginDiv>
            <Icon>
                <GitHubIcon 
                    style={{ fontSize: '5rem',
                    color: '#FFCE00'}}
                />
                
            </Icon>
            <Input onChange={(e) => setLogin(e.target.value)} id="login" value={login} name="login" placeholder="Usuário"></Input>
            <br></br>
            <Button onClick={() => handleClick()} type="submit">ENTRAR <ArrowForwardIcon 

            /></Button>
        </LoginDiv>
    );
};



export default Login;
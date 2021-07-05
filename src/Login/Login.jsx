import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { getUser } from "../Store/Ducks/User";
import { useDispatch } from 'react-redux';

import {
    LoginDiv,
    Input,
    Button,
    Icon,
    ReqField
} from './Login.style';

import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Login = () => {
    const [login, setLogin] = useState(""); //Receber o que o usuário digitou no input
    const dispatch = useDispatch()

    let history = useHistory();
    var count = 0; 

    function handleClick() { // Requisitar o login de usuário para a API do GitHub
        if (login !== "") {
            dispatch(getUser(login))

            history.push("/home");
        }
        else {
            count++;
            if (count <= 1) { /* Condicional para exibir a mensagem de erro apenas uma vez */
                var msgError = document.querySelector('#msgError');
                var msg = "Campo obrigatório";
                return (
                    msgError.innerHTML = msgError.innerHTML + msg
                )
            }
        }
    }

    return (
        <LoginDiv>
            <Icon>
                <GitHubIcon
                    style={{
                        fontSize: '5rem',
                        color: '#FFCE00'
                    }}
                />

            </Icon>
            <ReqField id='msgError'></ReqField>
            <Input onChange={(e) => setLogin(e.target.value)} id="login" value={login} name="login" placeholder="Usuário" ></Input>
            <br></br>
            <Button onClick={() => handleClick()} type="submit">ENTRAR <ArrowForwardIcon

            /></Button>
        </LoginDiv>
    );
};



export default Login;
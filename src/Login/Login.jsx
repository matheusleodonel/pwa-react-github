import React from 'react';

const Login = (props) => {
    const { handleClick } = props;  
    return (
        <div>
            <form onSubmit={handleClick} method="post">
            <input id="login" name="login" required placeholder="Usuário"></input>
            <br></br>
            <button type="submit">Entrar</button>
            </form>
        </div>
    );
};



export default Login;
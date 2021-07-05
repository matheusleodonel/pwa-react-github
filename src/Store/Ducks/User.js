import { createSlice } from "@reduxjs/toolkit";

// Gerando o objeto que irá receber os dados de usuário da API do GitHub
const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        getUser(){},
        setUser(state, action){ // SetUser que é chamado em './Handlers/User.js' para mudar o estado atual do user
            const userData = action.payload // Recebendo os dados do usuário via payload
            return {...state, ...userData} // Retornando o estado atual do user e o dados do seu objeto
        },
    }
})

export const {getUser, setUser} = userSlice.actions

export default userSlice.reducer
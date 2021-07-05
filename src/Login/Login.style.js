import styled from "styled-components";

export const LoginDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    overflow: hidden;
    padding: 50% 20px;
`

export const Input = styled.input`
    border-radius: 5px;
    width: calc(100% - 20px);
    border: 1px solid #E5E5E5;
    color: #535353;
    padding: 15px 10px;
`

export const Button = styled.button`
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    background-color: #FFCE00; 
    border: none;
    color: #030202;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Icon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
`
export const ReqField = styled.div`
    /* display: flex; */
    position: absolute;
    color: #EB2D2D;
    font-size: small;
    padding: 58px 0 0 0;
    left: 220px;
`
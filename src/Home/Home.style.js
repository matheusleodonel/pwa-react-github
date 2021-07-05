import styled from "styled-components";

export const TopPage = styled.div`
    text-align: left;
    color: #FFFFFF;
    padding: 15px 10px;
    font-weight: bold;
    font-size: 14px;
    background-color: #1F1F1F;
    display: flex;
    justify-content: space-between;
    height: 80px;
    & a {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: normal;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Avatar = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #FFFFFF;
    margin-top: -50px;
    & img {
        width: 100%;
    }
`

export const PessoalInfos = styled.div`
    text-align: left;
    margin-top: 40px;
    padding: 0 20px;
    > div {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin: 2px 0;
        color: #ddd;
    }
    > div:first-child {
        font-weight: bold;
        color: #FFFFFF;
        font-size: 1.5em;
        position: relative;
        &::before {
            content: "";
            width: 7px;
            height: 100%;
            background-color: #FFCE00;
            border-radius: 0 0.2em 0.2em 0;
            position: absolute;
            left: -20px;
        }
    }
`

export const Menu = styled.div`
    background-color: #5252525D;
    text-align: left;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    padding: 20px;
    cursor: pointer;
    > div {
        display: flex;
        text-align: center;
        flex: 1;
        justify-content: center;
        > a {
            color: #FFFFFF;
            text-decoration: none;
        }
        & div:first-child {
            font-size: 2.5em;
            font-weight: bold;
        }
        & div:last-child {
            font-size: 0.9em;
        }
    }
`
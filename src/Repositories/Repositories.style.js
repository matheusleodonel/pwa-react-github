import styled from "styled-components";

export const TopPage = styled.div`
    background-color: #1F1F1F;
    position: relative;
    color: #FFFFFF;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
`

export const ReposList = styled.div`
    background-color: #292929;
    display: table-cell;
    color: #FFFFFF;
    border-bottom: 3px solid #7070705A;
    text-align: left;
    padding: 20px;
    > div:first-child{
        font-weight: bold;
        position: relative;
        line-height: 30px;
        font-size: 1.2em;
        &::before {
            content: "";
            width: 7px;
            height: 100%;
            background-color: #FFCE00;
            border-radius: 0 0.4em 0.4em 0;
            position: absolute;
            left: -20px;
        }
    }
    > div:nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        > div {
            display: flex;
            align-items: center;
        }
    }
    
`
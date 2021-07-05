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

export const FollowerData = styled.div`
    max-width: 100%;
    border-bottom: 1px solid #7070705A;
    display: flex;
    align-items: center;
    padding: 15px;
    color: #FFFFFF;
    position: relative;
    &::before {
            content: "";
            width: 7px;
            height: 40%;
            background-color: #FFCE00;
            border-radius: 0 0.4em 0.4em 0;
            position: absolute;
            left: 0;
        }
    > div {
        justify-content: space-between;
    }
    > div:nth-child(2) {
        flex-grow: 2;
        text-align: left;
        margin: 0 30px;
    }
    > div:first-child {
        border-radius: 50%;
        border: 2px solid #FFFFFF;
        overflow: hidden;
        height: 70px;
        width: 70px;
        margin-left: 10px;
        & img {
            width: 100%;
        }
    }
`
import styled from "styled-components";
import { Link } from 'react-router-dom'

export const LinkTo = styled(Link) `
    text-decoration: none;
`

export const Containerr = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    background-color: rgb(166, 166, 166);
    padding: 40px; 
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
`

export const Empty = styled.div`
    width: 15%;
`
export const  StyleB = styled.div `
    background-color: rgb(255, 255, 255);
    width: 15%;
    min-width: 160px;
    cursor: pointer;
    border: 0px;
    border-radius: 30px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    border: 2px solid black;

    a{
        display: flex;
        align-items: center;
        justify-items: center;
        font-size: 1rem;
        text-align: center;

        &hover{
            background-color: #F50014;
            color:#ffff;
        }
    } 


`
export const StyleList = styled.h1`
    text-align: center;
    font-size: 1rem;

`
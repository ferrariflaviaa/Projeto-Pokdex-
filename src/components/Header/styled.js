import styled from "styled-components";


export const Containerr = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    background-color: rgb(166, 166, 166);
    padding: 40px; 
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
`


// export const List = styled.link`
//     padding-left: 240px;
//     padding-top: 30px;
// `

// .button{
//     border-radius: 20px;
//     /* padding-left: 220px; */
//     padding-top: 35px;
// }
export const Empty = styled.div`
    width: 20%;
`
export const  StyleB = styled.div `
    background-color: rgb(255, 255, 255);
    width: 20%;
    min-width: 160px;
    border-radius: 30px;
    cursor: pointer;
    border: 0px;
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
    /* left: 100px; */


`
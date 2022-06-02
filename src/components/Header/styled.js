import styled from "styled-components";


export const Containerr = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    background-color: rgb(166, 166, 166);
    padding: 40px;
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
    /* height: 30px; */
    border-radius: 30px;
    cursor: pointer;
    border: 0px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border: 2px solid black;

    &hover{
        background-color: rgb(79, 79, 79);
        color:#FFFF;
    }

    button{
    border-radius: 20px;
    /* padding-left: 220px; */
    padding-top: 35px;
}
`
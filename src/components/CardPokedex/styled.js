import styled from "styled-components";

export const ContainerCard = styled.div`
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 100ms ease-in-out;
    border-radius: 10px;
    cursor: pointer;

    &:hover { 
        transform: scale(1.05);
    }

    h1{
        display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    margin-bottom: 10px;
    }

`

export const Img = styled.img`
    width: 100%;

`

export const CardFooter = styled.div `

    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;

    button{
    background: #0066A2;
    color: white;
    border-color: #0066A2;
    border-radius: 10px;
    height: 60px;
    width: 100px;
    font: bold 15px arial, sans - serif;
    cursor: pointer;
    margin-right: 14px;
    margin-bottom: 20px;
    border: 0px;
}
`

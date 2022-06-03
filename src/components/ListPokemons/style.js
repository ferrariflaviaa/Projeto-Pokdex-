import styled from "styled-components";


export const ContainerLP = styled.div`
display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    padding: 50px;
    align-items: center;
`
export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
`
export const ButtonT = styled.button` 
    min-width: 130px;
        height: 60px;
        margin: 0px 10px;
        padding: 10px;
        border: 0px;
        border-radius: 20px;
        background-color: #C40014;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    &hover{
        background-color: #FF0016;
        color: #fff;
    }


`



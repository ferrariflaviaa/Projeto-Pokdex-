import styled from "styled-components";

/* .Container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    padding: 90px;
    padding-left: 90px;
    padding-right: 90px;
    align-items: center;
    /* justify-content: center; */
    /* justify-items: center; 
} */

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    align-items: center; 
    font-family: 'Courier New', Courier, monospace;
    margin-top: 30px;
`
export const ContainerPage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    /* height: 10px; */

`
export const ButtonT = styled.button` 
        min-width: 130px;
        height: 60px;
        margin: 0px 10px 10px;
        padding: 10px;
        border: 0px;
        border-radius: 20px;
        background-color: #C40014;
        color: #fff;
        font-weight: bold;
    &hover{
        background-color: #FF0016;
        color: #fff;
    }

`
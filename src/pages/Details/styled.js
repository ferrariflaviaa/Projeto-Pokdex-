import styled from "styled-components";


export const ContainerD = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    padding: 90px;
    justify-content: center;
    padding-left: 51px;
    font-family: 'Courier New', Courier, monospace;
    /* padding-right: 80px; */
    align-items: center;
    /* justify-content: center; */
    /* justify-items: center; */

`


export const ContainerDetalis = styled.div`
    display: flex;
    flex-direction: column;

`

export const ImgPokemon = styled.img`
    width: 70%;
    /*height: 30%; */
    padding: 20px 50px;
    background-color: rgba(104, 195, 195, 0.535);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px 70px;

    &hover{
    -webkit-transform: scale(1.0);
    transform: scale(1.1);
}
`


export const DetalisT = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    /* width: 500px; */
    /* height: 100%; */
    background-color: bisque;

    &hover{
    -webkit-transform: scale(1.0);
    transform: scale(1.1);
}
`

export const TypesMove = styled.div`
    height: 20%;
    width: 100%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &hover{
    -webkit-transform: scale(1.0);
    transform: scale(1.1);
}
    
`

export const Types = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: rgb(144, 144, 200);
    /* padding: 20px; */
`


export const Title = styled.h1`
    text-align: center;
`


// .imgPokemon:hover{
//     -webkit-transform: scale(1.0);
//     transform: scale(1.1);
// }

// .Detalis:hover{
//     -webkit-transform: scale(1.0);
//     transform: scale(1.1);
// }

// .TypesMove:hover{
//     -webkit-transform: scale(1.0);
//     transform: scale(1.1);
// }
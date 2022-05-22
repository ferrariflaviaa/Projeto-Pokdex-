import './styled.css'

export default function Header({ routeName }) {


    return (
        <div className="container">
            {routeName === "home" ? (
                <>
                    <button className='styleB'>VER MINHA POKEDEX</button>
                    <h2>LISTA DE POKEMOS</h2>
                    <div className='empty' />
                </>
            ) : routeName === 'pokedex' ? (
                <>
                    <div className='button'>
                        <button className='styleB'>VER MINHA POKEDEX</button>
                    </div>
                    <div className='list'>
                        <h2>LISTA DE POKEMOS</h2>
                    </div>
                </>
            ) : routeName === 'details' ? (
                <>
                    <button className='styleB'>VOLTA</button>
                    <h2>LISTA DE POKEMOS</h2>
                    <button className='styleB'>ADICIONAR/REMOVER DA POKEDEX</button>
                    
                </>
            ) : (
                <></>
            )}
        </div>
    )

}
import './style.css'

export default function Header({ routeName }) {


    return (
        <div className="container">
            {routeName === "home" ? (
                <>
                    {/* <div className='button'> */}
                        <button className='styleB'>VER MINHA POKEDEX</button>
                    {/* </div> */}
                    {/* <div className='list'> */}
                        <h2>LISTA DE POKEMOS</h2>
                        <div className='empty'/>
                    {/* </div> */}
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
                    <div className='button'>
                        <button className='styleB'>VER MINHA POKEDEX</button>
                    </div>
                    <div className='list'>
                        <h2>LISTA DE POKEMOS</h2>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )

}
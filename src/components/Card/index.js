import './style.css';
import pikachu from './../../img/Pikachu.jpg'


export default function Card() {


    return (
        <div className='containerCard'>
            <div className='column'>
                <div className='styledCard'>
                    <img className='imgCard' src={pikachu} alt='pokemon' />

                    <div className='bottomCard'>
                        <bottom className='adicionarCard'>Adicionar</bottom><br/>
                    </div>

                    <div className='bottomCard'>
                        <bottom className='detalherCard'>Ver Detalher</bottom>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Botao from '../Button';
import Relogio from './Relogio';

import './style.sass'

const Cronometro = () => {
  return (
    <div className='cronometro'>
        <p className='titulo'>Escolha um card e inicie o cronometro</p>
        <div className='relogioWrapper'>
            <Relogio />
        </div>
        <Botao texto='Começar' />
    </div>
  );
};

export default Cronometro;
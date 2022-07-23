import './style.scss'

const Botao = ({texto}: {texto: string}) => {
  return (
    <button className='botao'>
      {texto}
    </button>
  );
};

export default Botao;
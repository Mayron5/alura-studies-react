import './style.scss'

interface Props {
  texto: string,
  tipo?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

const Botao = ({ texto, tipo = "button", onClick }: Props) => {
  return (
    <button className='botao' type={tipo} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botao;
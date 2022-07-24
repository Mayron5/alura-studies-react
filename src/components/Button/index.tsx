import './style.scss'

interface Props {
  tipo?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

const Botao = ({ tipo = "button", onClick, children }: Props) => {
  return (
    <button
      className='botao'
      type={tipo}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Botao;
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import './style.scss'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
};

const Lista = ({ tarefas, selecionaTarefa }: Props) => {

  return (
    <aside className='listaTarefas'>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item
            tarefa={tarefa}
            key={tarefa.id}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
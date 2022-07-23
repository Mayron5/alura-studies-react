import Item from './Item';
import './style.scss'

const Lista = () => {

  const tarefas = [
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'JavaScript',
      tempo: '01:00:00'
    },
    {
      tarefa: 'SASS',
      tempo: '03:00:00'
    },
  ]

  return (
    <aside className='listaTarefas'>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (<Item {...tarefa} key={index} />))}
      </ul>
    </aside>
  );
};

export default Lista;
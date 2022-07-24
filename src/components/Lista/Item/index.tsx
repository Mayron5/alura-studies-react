import { ITarefa } from "../../../types/tarefa";

import './style.scss'

interface Props {
    tarefa: ITarefa,
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
}

const Item = ({
    tarefa,
    selecionaTarefa
}: Props) => {

    return (
        <li className={`item 
                ${tarefa.selecionado ? 'itemSelecionado' : ''} 
                ${tarefa.completado ? 'itemCompletado' : ''}`}

            onClick={() => { !tarefa.completado && selecionaTarefa(tarefa) }}>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
            {tarefa.completado && <span className="concluido" aria-label="tarefa completada"></span>}
        </li>
    );
};

export default Item;
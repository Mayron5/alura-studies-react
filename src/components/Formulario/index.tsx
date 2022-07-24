import { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Button'
import './style.scss'
import { v4 as uuidv4 } from 'uuid';

interface Props {
	setTarefas : React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({ setTarefas }: Props) => {

	const [formulario, setFormulario] = useState({
		tarefa: '',
		tempo: '00:00:00',

	});

	function adicionarTarefa(event: React.FormEvent) {
		event.preventDefault();
		setTarefas((tarefas) => [...tarefas,
		{
			...formulario,
			selecionado: false,
			completado: false,
			id: uuidv4()
		}]);
		setFormulario({
			tarefa: '',
			tempo: '00:00:00'
		});
	}

	return (
		<form className='novaTarefa' onSubmit={(event) => adicionarTarefa(event)}>
			<div className='inputContainer'>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input
					type="text"
					name='tarefa'
					id='tarefa'
					placeholder='O que você quer estudar?'
					value={formulario.tarefa}
					onChange={(event) => setFormulario({ ...formulario, tarefa: event.target.value })}
					required
				/>
			</div>
			<div className='inputContainer'>
				<label></label>
				<input
					type="time"
					step={1}
					name='tempo'
					min='00:00:01'
					max='01:30:00'
					value={formulario.tempo}
					onChange={(event) => setFormulario({ ...formulario, tempo: event.target.value })}
				/>
			</div>
			<Botao tipo='submit'>Adicionar</Botao>
		</form>
	);
};

export default Formulario;
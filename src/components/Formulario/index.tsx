import React from 'react'
import Botao from '../Button'
import './style.scss'

const Formulario = () => {
	return (
		<form className='novaTarefa'>
			<div className='inputContainer'>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input type="text" name='tarefa' id='tarefa' placeholder='O que você quer estudar?' required />
			</div>
			<div className='inputContainer'>
				<label htmlFor=""></label>
				<input type="time" step={1} name='tempo' min='00:00:00' max='01:30:00' />
			</div>
			<Botao texto='Adicionar' />
		</form>
	);
};

export default Formulario;
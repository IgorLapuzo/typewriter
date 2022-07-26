import React from 'react';
import clases from './DoingExercise.module.css'
import Board from './../Board/Board.jsx'
import Keyboard from './../Keyboard/Keyboard.jsx'


const DoingExercise = () => {
	return <div className = {clases.doingExercise}>
		<div className = {clases.container}>
			<Board />
			<Keyboard />
		</div>
	</div>
}

export default DoingExercise;

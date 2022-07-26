import React from 'react';
import clases from './TrainingBlock.module.css'
import Board from './../Board/Board.jsx'
import Keyboard from './../Keyboard/Keyboard.jsx'
import { useDispatch, useSelector } from 'react-redux';



function DoingExercise = (props) => {

	const loadingStatus = useSelector(getLoadingStatus);
	const dispatch = useDispatch();


	return <div className = {clases.doingExercise}>
		<div className = {clases.container}>
			<div>
				<span>Speed:</span>
				<span>Mistakes:</span>
			</div>
			<Board />
			<Keyboard />
		</div>
	</div>
}

export default DoingExercise;

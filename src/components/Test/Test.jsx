import React from 'react';
import clases from './Test.module.css'
import Board from './../Board/Board.jsx'


const Test = () => {
	return <div className = {clases.test}>
		<div className = {clases.container}>
			<Board />
		</div>
	</div>
}

export default Test;

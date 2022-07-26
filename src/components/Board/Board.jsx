import React from 'react';
import clases from './Board.module.css'


const Board = () => {
	return <div className = {clases.boardWraper}>
		<div className = {clases.board}>Some text here1</div>
	</div>
}

export default Board;
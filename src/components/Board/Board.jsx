import React from 'react';
import clases from './Board.module.css'
import { getTrainingText, getCurrentSymbol, getWrongSymbolNumber } from '../../store/reducer.js'
import { connect } from 'react-redux';


function Board = (props) => {

	const text = () => props.getTrainingText() ;
	const wrongSymbol = () => getWrongSymbolNumber();
	const currentSymbol = () => getCurrentSymbol();

	return (
		<div className = {clases.boardWraper}>
			<div className = {clases.board}>
				<span className = {clases.completed}>
        			{currentSymbol > 0 && text.slice(0, currentSymbol)}
      			</span>
      			<span className = {clases.current, wrongSymbol === currentSymbol ? clases.wrong : '')}>
        			{text.slice(currentSymbol, currentSymbol + 1)}
      			</span>
      			<span className = {clases.uncompleted}>
        			{text.slice(currentSymbol + 1)}
      			</span>
			</div>
		</div>
	)
}

export default Board;
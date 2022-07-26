import React from 'react';
import clases from './Keyboard.module.css'


const Keyboard = () => {
	return <div className = {clases.keyboardWraper}>
		<div className = {clases.keyboard}></div>
	</div>
}

export default Keyboard;
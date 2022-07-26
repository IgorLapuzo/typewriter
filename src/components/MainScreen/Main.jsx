import React from 'react';
import clases from './Main.module.css'
import { NavLink } from 'react-router-dom';


const Main = () => {
	return <div className = {clases.main}>
		<div className = {clases.header}>Typewriter</div>
		<div className = {clases.container}>
			<div className = {clases.buttonWraper}>
				<NavLink to = '/theory' className = {clases.button}>Theory</NavLink>
			</div>
			<div className = {clases.buttonWraper}>
				<NavLink to = '/lesson' className = {clases.button}>Start Learning</NavLink>
			</div>
			<div className = {clases.buttonWraper}>
				<NavLink to = '/test'  className = {clases.button} >Speed Test</NavLink>
			</div>
			
		</div>
	</div>
}

export default Main;
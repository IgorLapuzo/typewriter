import React from 'react';
import clases from './Header.module.css'


const Header = () => {
	return <header className = {clases.header}>
		<div className = {clases.container}>
			<div>Name</div>
			<div>Statistic Login</div>
		</div>
	</header>
}

export default Header;
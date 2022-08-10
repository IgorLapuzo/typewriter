import React from "react";
import Header from '../header/header';
import TrainingBlock from '../trainingBlock/trainingBlock';

function MainScreen(props) {
	return (
		<React.Fragment>
			<Header />
			<TrainingBlock />
		</React.Fragment>
	);
}

export default MainScreen;
import React from "react";
import Header from '../header/header';
import Message from '../message/message';
import TrainingBlock from '../trainingBlock/trainingBlock';

const text = 'Typing text';

const message = 'Start typing when you\'re ready';

const user = 'Igor';

function MainScreen(props) {
  return (
    <React.Fragment>
      <Header user={user}/>
      <main>
        <Message>{message}</Message>
        <TrainingBlock>{text}</TrainingBlock>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
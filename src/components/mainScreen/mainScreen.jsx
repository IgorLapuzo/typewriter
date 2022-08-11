import React from "react";
import Header from '../header/header';
import Message from '../message/message';
import TrainingBlock from '../trainingBlock/trainingBlock';

const text = 'Пробный текст';

function MainScreen(props) {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Message>Сообщение</Message>
        <TrainingBlock>{text}</TrainingBlock>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
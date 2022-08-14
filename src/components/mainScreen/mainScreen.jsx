import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTrainingStatus } from '../../store/selectors';
import { setIsStarted } from '../../store/action';
import Header from '../header/header';
import Message from '../message/message';
import TrainingBlock from '../trainingBlock/trainingBlock';


const text = 'Typing text';

const message = 'Start typing when you\'re ready';

const user = 'Igor';

function MainScreen(props) {
  const dispatch = useDispatch();
  const trainingStatus = useSelector(getTrainingStatus);
  console.log(trainingStatus);

  document.addEventListener('keydown', () => {
    dispatch(setIsStarted());
  });

  return (
    <React.Fragment>
      <Header user={user} isMain/>
      <main>
        <Message>{message}</Message>
        <TrainingBlock>{text}</TrainingBlock>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
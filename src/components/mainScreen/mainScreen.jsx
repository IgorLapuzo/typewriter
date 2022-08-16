import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTrainingStatus, getTrainingText, getMessageText } from '../../store/selectors';
import { setIsStarted } from '../../store/action';
import Header from '../header/header';
import Message from '../message/message';
import TrainingBlock from '../trainingBlock/trainingBlock';

function MainScreen(props) {
  const dispatch = useDispatch();
  const trainingStatus = useSelector(getTrainingStatus);
  const text = useSelector(getTrainingText);
  const message = useSelector(getMessageText);

  const onKeydown = () => {
    if (!trainingStatus) {
      dispatch(setIsStarted());
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);

    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <React.Fragment>
      <Header isMain/>
      <main>
        <Message>{message}</Message>
        <TrainingBlock>{text}</TrainingBlock>
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
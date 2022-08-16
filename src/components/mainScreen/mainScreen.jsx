import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTrainingStatus, getMessageText } from '../../store/selectors';
import { setIsStarted, getSymbolTyped } from '../../store/action';
import { checkSymbol } from '../../utils';
import Header from '../header/header';
import Message from '../message/message';
import TrainingBlock from '../trainingBlock/trainingBlock';

function MainScreen() {
  const dispatch = useDispatch();
  const trainingStatus = useSelector(getTrainingStatus);
  const message = useSelector(getMessageText);

  const onKeydown = (evt) => {
    if (!checkSymbol(evt.key)) {
      return;
    }
    if (!trainingStatus) {
      dispatch(setIsStarted());
    }
    dispatch(getSymbolTyped(evt.key));
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeydown);

    return () => document.removeEventListener('keydown', onKeydown);
  }, [trainingStatus]);

  return (
    <React.Fragment>
      <Header isMain/>
      <main>
        <Message>{message}</Message>
        <TrainingBlock />
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
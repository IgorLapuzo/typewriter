import React, {useRef, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { getTrainingStatus, getMessageText, getTrainingText, getCurrentSymbol, getLoadingStatus } from '../../store/selectors';
import { startTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol } from '../../store/action';
import { checkSymbol } from '../../utils';
import { AppRoutes } from '../../constants';
import Header from '../header/header';
import LoadingScreen from '../loadingScreen/loadingScreen';
import Message from '../message/message';

import TrainingBlock from '../trainingBlock/trainingBlock';

function MainScreen() {
  const dispatch = useDispatch();
  const trainingStatus = useSelector(getTrainingStatus);
  const message = useSelector(getMessageText);
  const currentSymbol = useSelector(getCurrentSymbol);
  const text = useSelector(getTrainingText);
  const loadingStatus = useSelector(getLoadingStatus);
  const symbolRef = useRef();
  

  const onKeydown = (evt) => {
    if (!checkSymbol(evt.key) || loadingStatus) {
      return;
    }
    evt.preventDefault();

    if (!trainingStatus) {
      dispatch(startTraining());
    }

    if (evt.key === symbolRef.current.textContent) {
      dispatch(changeCurrentSymbol());
    } else {
      dispatch(setWrongSymbol());
      dispatch(increaseMistakes());
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);

    return () => document.removeEventListener('keydown', onKeydown);
  }, [trainingStatus, loadingStatus]);

  if (text && currentSymbol === text.length) {
    return <Navigate to={AppRoutes.RESULT} />;
  }

  const renderMainContent = () => (
    <React.Fragment>
      <Message>{message}</Message>
      <TrainingBlock currentRef={symbolRef}/>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Header isMain/>
      <main>
      {(!text && <LoadingScreen />) || renderMainContent()}
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
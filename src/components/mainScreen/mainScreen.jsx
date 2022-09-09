import React, { useRef, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTrainingStatus, getMessageText, getTrainingText, getCurrentSymbol, getLoadingStatus } from '../../store/selectors';
import { startTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol, setMessage } from '../../store/action';
import { checkSymbol } from '../../utils';
import { AppRoutes, MessageTexts } from '../../constants';
import Header from '../header/header';
import LoadingScreen from '../loadingScreen/loadingScreen';
import Message from '../message/message';
import TrainingBlock from '../trainingBlock/trainingBlock';
import classNames from 'classnames';
import styles from './mainScreen.module.scss';

function MainScreen() {
  const dispatch = useDispatch();
  const symbolRef = useRef();
  const trainingStatus = useSelector(getTrainingStatus);
  const message = useSelector(getMessageText);
  const currentSymbol = useSelector(getCurrentSymbol);
  const text = useSelector(getTrainingText);
  const loadingStatus = useSelector(getLoadingStatus);
  
  

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
    dispatch(setMessage(`${!trainingStatus ? MessageTexts.START : ''}`));
    document.addEventListener('keydown', onKeydown);

    return () => document.removeEventListener('keydown', onKeydown);
  }, [trainingStatus, loadingStatus]);

  if (text && currentSymbol === text.length) {
    return <Navigate to={AppRoutes.RESULT} />;
  }

  const renderMainContent = () => (
    <React.Fragment>
      <div className={classNames(styles.container, message ? '' : styles.hidden)}>
        <Message>{message}</Message>
      </div>
      <TrainingBlock currentRef={symbolRef}/>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Header isMain />
      <main>
      {(!text && <LoadingScreen />) || renderMainContent()}
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
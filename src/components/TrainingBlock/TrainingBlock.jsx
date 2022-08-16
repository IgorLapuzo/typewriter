import React from 'react';
import styles from './trainingBlock.module.scss';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import { resetTraining } from '../../store/action';
import Button from '../button/button';
import CurrentResult from '../currentResult/currentResult';
import { ResultType } from '../../constants';
import TrainingText from '../trainingText/trainingText';

function TrainingBlock() {
  const dispatch = useDispatch();

  return (
    <div className={classNames('row', 'justify-content-center', styles.container)}>
      <div className={classNames('col-10', 'col-md-6', styles.wrapper)}>
        <div className={styles.header}>
          <p className={styles.result}>
            Typing Speed:
            <CurrentResult className={styles.rate} resultType={ResultType.SPEED}/>
          </p>
          <Button
            className={styles.button}
            modifier='dark'
            onBtnClick={() => {}}
          >
            Change text
          </Button>

          <Button
            className={styles.button}
            modifier='dark'
            onBtnClick={() => dispatch(resetTraining())}
          >
            Restart
          </Button>
        </div>
        <TrainingText />
      </div>
    </div>
  );
}



export default TrainingBlock;
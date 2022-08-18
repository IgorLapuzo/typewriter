import React from 'react';
import styles from './trainingBlock.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import { resetTraining } from '../../store/action';
import Button from '../button/button';
import CurrentSpeedResult from '../currentSpeedResult/currentSpeedResult';
import TrainingText from '../trainingText/trainingText';

function TrainingBlock(props) {
  const {currentRef} = props;
  const dispatch = useDispatch();

  return (
    <div className={classNames('row', 'justify-content-center', styles.container)}>
      <div className={classNames('col-10', 'col-md-6', styles.wrapper)}>
        <div className={styles.header}>
          <p className={styles.result}>
            Speed:&nbsp;
            <CurrentSpeedResult className={styles.rate} />
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
        <TrainingText currentRef={currentRef}/>
      </div>
    </div>
  );
}

TrainingBlock.propTypes = {
  currentRef: PropTypes.object.isRequired,
};

export default TrainingBlock;
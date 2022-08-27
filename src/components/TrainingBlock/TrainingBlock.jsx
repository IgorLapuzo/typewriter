import React from 'react';
import styles from './trainingBlock.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getLoadingStatus } from '../../store/selectors';
import { resetTraining, setIsLoading } from '../../store/action';
import { fetchTrainingText } from '../../store/apiActions';
import Button from '../button/button';
import CurrentSpeedResult from '../currentSpeedResult/currentSpeedResult';
import TrainingText from '../trainingText/trainingText';

function TrainingBlock(props) {
  const { currentRef } = props;
  const loadingStatus = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  const onChangeClickHandler = () => {
    if (loadingStatus) {
      return;
    }
    dispatch(setIsLoading(true));
    dispatch(fetchTrainingText());
    dispatch(resetTraining());
  };

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
            disabled={loadingStatus}
            modifier='dark'
            onBtnClick={onChangeClickHandler}
          >
            Change text
          </Button>

          <Button
            className={styles.button}
            disabled={loadingStatus}
            modifier='dark'
            onBtnClick={() => {
              !loadingStatus && dispatch(resetTraining());
            }}
          >
            Restart
          </Button>
        </div>
        <TrainingText currentRef={currentRef} />
      </div>
    </div>
  );
}

TrainingBlock.propTypes = {
  currentRef: PropTypes.object.isRequired,
};

export default TrainingBlock;
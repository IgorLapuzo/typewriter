import React from 'react';
import styles from './trainingBlock.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button/button';
import CurrentResult from '../currentResult/currentResult';
import { ResultType } from '../../constants';

function TrainingBlock({children, ...attr}) {
  // document.addEventListener('keydown', (evt) => {
  //   console.log(evt.key);
  // });
  return (
    <div className={classNames('row', 'justify-content-center', styles.container)}>
      <div className={classNames('col-10', 'col-md-6', styles.wrapper)}>
        <div className={styles.header}>
          <p className={styles.result}>
            Typing Speed:
            <CurrentResult className={styles.rate} resultType={ResultType.SPEED}/>
          </p>
          <Button className={styles.button} modifier='dark'>change the text</Button>
          <Button className={styles.button} modifier='dark'>restart</Button>
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
}

TrainingBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrainingBlock;
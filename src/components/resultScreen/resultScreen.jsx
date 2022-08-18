import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import Result from '../result/result';
import { ResultType } from '../../constants';
import { getUser, getMistakesCount, getStartTime, getCurrentSymbol } from '../../store/selectors';
import { AppRoutes } from '../../constants';
import Header from '../header/header';
import styles from './resultScreen.module.scss';

function ResultScreen() {
  const user = useSelector(getUser);
  const startTime = useSelector(getStartTime);
  const rightSymbolsCount = useSelector(getCurrentSymbol);
  const mistakesCount = useSelector(getMistakesCount);

  const speedResult = {
    start: startTime,
    end: new Date(),
    rightSymbols: rightSymbolsCount,
    mistakes: mistakesCount,
  };

  const precisionResult = {
    rightSymbols: rightSymbolsCount,
    mistakes: mistakesCount,
  };

  if (speedResult.rightSymbols < 1) {
    return <Navigate to={AppRoutes.ROOT} />;
  }



  return (
    <React.Fragment>
      <Header user={user}/>
      <main className={classNames('row', 'align-items-center')}>
        <div className={classNames('row', 'justify-content-center', 'align-items-center')}>
          <h1 className={styles.title}>Keep on doing it! Your results:</h1>
          <div
            className={classNames('col-4', 'row', 'justify-content-center', 'align-items-center', styles.wrapper)}
          >
            <div className={classNames('col-10', styles.result)}>
              Speed:&nbsp;
              <Result
                resultType={ResultType.SPEED}
                result={speedResult}
              />
            </div>
            <div className={classNames('col-10', styles.result)}>
              Accuracy:&nbsp;
              <Result
                resultType={ResultType.PRECISION}
                result={precisionResult}
              />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default ResultScreen;
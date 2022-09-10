import React, { useEffect } from 'react';
import classNames from 'classnames';
import {useSelector, useDispatch} from 'react-redux';
import { Navigate } from 'react-router-dom';
import Result from '../result/result';
import { ResultType } from '../../constants';
import { getMistakesCount, getStartTime, getCurrentSymbol, getUserInfo } from '../../store/selectors';
import { getTypeSpeed, getTypePrecision } from '../../utils';
import { AppRoutes } from '../../constants';
import { saveResults } from '../../store/apiActions';
import Header from '../header/header';
import styles from './resultScreen.module.scss';

function ResultScreen() {
  
  const startTime = useSelector(getStartTime);
  const rightSymbolsCount = useSelector(getCurrentSymbol);
  const mistakesCount = useSelector(getMistakesCount);
  const user = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const resultsData = {
    start: startTime,
    end: new Date(),
    rightSymbols: rightSymbolsCount,
    mistakes: mistakesCount,
  };

  const results = {
    speed: getTypeSpeed(resultsData),
    precision: getTypePrecision(resultsData),
  };

  useEffect(() => user.name && dispatch(saveResults(results, user)), []);

  if (resultsData.rightSymbols < 1) {
    return <Navigate to={AppRoutes.ROOT} />;
  }



  return (
    <React.Fragment>
      <Header />
      <main className={classNames('row', 'align-items-center')}>
        <div className={classNames('row', 'justify-content-center', 'align-items-center')}>
          <h1 className={styles.title}>Your result:</h1>
          <div
            className={classNames('col-4', 'row', 'justify-content-center', 'align-items-center', styles.wrapper)}
          >
            <div className={classNames('col-10', styles.result)}>
              Speed:&nbsp;
              <Result
                resultType={ResultType.SPEED}
                result={results.speed}
              />
            </div>
            <div className={classNames('col-10', styles.result)}>
              Accuracy:&nbsp;
              <Result
                resultType={ResultType.PRECISION}
                result={results.precision}
              />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default ResultScreen;
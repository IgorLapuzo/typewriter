import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResults, getUserInfo } from '../../store/selectors';
import { fetchResults } from '../../store/apiActions';
import { Navigate } from 'react-router';
import classNames from 'classnames';
import Header from '../header/header';
import styles from './statsScreen.module.scss';
import { AppRoutes } from '../../constants';


function StatsScreen () {
  const results = useSelector(getResults);
  const user = useSelector(getUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    user.id && dispatch(fetchResults(user));
  }, [user]);

  if (!user.id) {
    return <Navigate to={AppRoutes.ROOT} />;
  }

  return (
    <React.Fragment>
      <Header />
      <main className={classNames('row', 'align-items-center')}>
        <div className={classNames('row', 'justify-content-center', 'align-items-center')}>
          <h1 className={styles.title}>User result <span>{user.name}</span></h1>
          <div className={classNames('col-4', 'row', 'justify-content-center', 'align-items-center', styles.wrapper)}>

            <ol >
              {results.map((res, index) => (
                <li key={`${res.id}${res.speed}`}>
                  <p>Speed: <span className={styles.result}>{res.speed}</span></p>
                  <p>Accuracy: <span className={styles.result}>{res.precision}</span></p>
                  {index !== results.length - 1 && <hr/>}
                </li>
              ))}
            </ol>

          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default StatsScreen;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getResults, getUserInfo } from '../../store/selectors';
import { fetchResults } from '../../store/apiActions';

function StatsScreen () {
  const results = useSelector(getResults);
  const user = useSelector(getUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults(user));
  }, [results]);

  return (
    <React.Fragment>
      <h1>Users result <span>{user.name}</span></h1>
      <ol>
        {results.map((res) => (
          <li key={res.id}>
            <p>Speed: <span>{res.speed}</span></p>
            <p>Accuracy: <span>{res.precision}</span></p>
          </li>
        ))}
      </ol>
    </React.Fragment>
  );
}

export default StatsScreen;
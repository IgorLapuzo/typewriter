import React from 'react';
import Header from '../header/header';

const user = 'Igor';


function ResultScreen(props) {
  return (
    <React.Fragment>
      <Header user={user}/>
      <main>
        <div>result screen</div>
      </main>
    </React.Fragment>
  );
}

export default ResultScreen;
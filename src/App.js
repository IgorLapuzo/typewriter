import React from 'react';
import MainScreen from './components/mainScreen/mainScreen'
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.layout}>
      <MainScreen />
    </div>
  ); 
}

export default App;

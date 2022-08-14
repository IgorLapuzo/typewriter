import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../src/constants';
import MainScreen from './components/mainScreen/mainScreen';
import LoginScreen from './components/loginScreen/loginScreen';
import ResultScreen from './components/resultScreen/resultScreen';
import styles from './app.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Routes>
          <Route path={AppRoutes.ROOT} element = {<MainScreen />} /> 
          <Route path={AppRoutes.LOGIN} element = {<LoginScreen />} /> 
          <Route path={AppRoutes.RESULT} render={() => <ResultScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

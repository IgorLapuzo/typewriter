import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../src/constants';
import { ToastContainer } from 'react-toastify';
import MainScreen from './components/mainScreen/mainScreen';
import LoginScreen from './components/loginScreen/loginScreen';
import ResultScreen from './components/resultScreen/resultScreen';
import styles from './app.module.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Routes>
          <Route path={AppRoutes.ROOT} element = {<MainScreen />} /> 
          <Route path={AppRoutes.LOGIN} element = {<LoginScreen />} /> 
          <Route path={AppRoutes.RESULT} element = {<ResultScreen />} />
        </Routes>
        <ToastContainer autoClose={false}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

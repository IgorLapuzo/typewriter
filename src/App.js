import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import LessonChoise from './components/LessonChoise/LessonChoise.jsx';
import DoingExercise from './components/DoingExercise/DoingExercise.jsx';
import ResultTable from './components/ResultTable/ResultTable.jsx';
import Test from './components/Test/Test.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className = 'app-bg'>
        <div className = 'app-wrapper'> 
          <Header />
          <div className = 'app-wrapper-content'>
            <Routes>
              <Route path = '/main/*' element = {<Main />} />
              <Route path = '/lesson/*' element = {<LessonChoise />} />
              <Route path = '/exercise/*' element = {<DoingExercise />} />
              <Route path = '/result/*' element = {<ResultTable />} />
              <Route path = '/test/*' element = {<Test />} />
            </Routes> 
          </div> 
        </div>
      </div>
    </BrowserRouter>
    
  );
}


export default App;

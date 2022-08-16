import { createReducer } from '@reduxjs/toolkit';
import { setIsStarted, startTraining, resetTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol, loadText, setMessage, getSymbolTyped } from './action';


const initialState = {
  isTrainingStarted: false,
  currentSymbolNumber: 3,
  currentSymbolTyped: '',
  wrongSymbolNumber: null,
  startTime: null,
  mistakesCount: 0,
  trainingText: 'this text from reducer',
  messageText: 'Start typing when you\'re ready from reducer',
  results: [],
  user: 'Igor from reducer',
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsStarted, (state) => {
      state.isTrainingStarted = true;
    })
    .addCase(startTraining, (state) => {
      state.isTrainingStarted = true;
      state.startTime = `${new Date()}`;
    })
    .addCase(resetTraining, (state) => {
      state.isTrainingStarted = false;
      state.currentSymbolNumber = 0;
      state.currentSymbolTyped = '';
      state.symbolsTypedCount = 0;
      state.wrongSymbolNumber = null;
      state.startTime = null;
      state.mistakesCount = 0;
    })
    .addCase(getSymbolTyped, (state, action) => {
      state.currentSymbolTyped = action.payload;
    })
    .addCase(setWrongSymbol, (state) => {
      state.wrongSymbolNumber = state.currentSymbolNumber;
    })
    .addCase(increaseMistakes, (state, action) => {
      state.mistakesCount = state.mistakesCount + action.payload;
    })
    .addCase(changeCurrentSymbol, (state, action) => {
      state.currentSymbolNumber = state.currentSymbolNumber + action.payload;
    })
    .addCase(loadText, (state, action) => {
      state.trainingText = action.payload.slice(0, 1).join(' ');
    })
    .addCase(setMessage, (state, action) => {
      state.messageText = action.payload;
    })
});

export default reducer;


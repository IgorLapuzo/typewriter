import { createReducer } from '@reduxjs/toolkit';
import { setIsStarted, startTraining, resetTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol, loadText, setMessage } from './action';


const initialState = {
  isTrainingStarted: false,
  currentSymbolNumber: 0,
  wrongSymbolNumber: null,
  startTime: null,
  mistakesCount: 0,
  trainingText: '',
  messageText: 'Начните печатать, когда будете готовы!',
  results: [],
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
      state.symbolsTypedCount = 0;
      state.wrongSymbolNumber = null;
      state.startTime = null;
      state.mistakesCount = 0;
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


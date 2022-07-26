import { createReducer } from '@reduxjs/toolkit';
import { startTraining, resetTraining, setWrongSymbol, increaseMistakes, changeCurrentSymbol, loadText, requireAuthorization, logout, setIsLoading, setMessage, loadResults  } from './action';
import { AuthorizationStatus } from '../constants';


const initialState = {
  isTrainingStarted: false,
  currentSymbolNumber: 0,
  wrongSymbolNumber: null,
  startTime: null,
  mistakesCount: 0,
  trainingText: '',
  messageText: 'Start typing when you\'re ready from reducer',
  results: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
  isLoading: true,
};


const reducer = createReducer(initialState, (builder) => {
  builder
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
      state.trainingText = 'Start typing when ready';
    })
    .addCase(setMessage, (state, action) => {
      state.messageText = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
      state.authInfo = action.payload.authInfo;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authInfo = {};
      state.results = [];
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(loadResults, (state, action) => {
      state.results = action.payload;
    })
});

export default reducer;


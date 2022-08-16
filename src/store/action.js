import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  SET_IS_STARTED: 'training/setIsStarted',
  START_TRAINING: 'training/startTraining',
  RESET_TRAINING: 'training/resetTraining',
  GET_SYMBOL_TYPED: 'training/getSymbolTyped',
  SET_WRONG_SYMBOL: 'training/setWrongSymbol',
  INCREASE_MISTAKES: 'training/increaseMistakes',
  CHANGE_CURRENT_SYMBOL: 'training/changeCurrentSymbol',
  SET_MESSAGE: 'data/setMessage',
  LOAD_TEXT: 'data/loadText',
};

export const setIsStarted = createAction(ActionType.SET_IS_STARTED);
export const startTraining = createAction(ActionType.START_TRAINING);
export const resetTraining = createAction(ActionType.RESET_TRAINING);
export const setWrongSymbol = createAction(ActionType.SET_WRONG_SYMBOL);

export const getSymbolTyped = createAction(ActionType.GET_SYMBOL_TYPED, (symbol) => ({
  payload: symbol,
}));

export const increaseMistakes = createAction(ActionType.INCREASE_MISTAKES, () => ({
  payload: 1,
}));

export const changeCurrentSymbol = createAction(ActionType.CHANGE_CURRENT_SYMBOL, () => ({
  payload: 1,
}));

export const loadText = createAction(ActionType.LOAD_TEXT, (text) => ({
  payload: text,
}));

export const setMessage = createAction(ActionType.SET_MESSAGE, (text) => ({
  payload: text,
}));



const initialState = {
  isTrainingStarted: false,
  currentSymbolNumber: 0,
  wrongSymbolNumber: null,
  startTime: null,
  mistakesCount: 0,
  trainingText: 'bla-bla',
  messageText: 'Начните печатать, когда будете готовы!',
  results: [],
};


const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'START_TRAINING':
			return {
				...state,
				state.isTrainingStarted = true,
      			state.startTime = `${new Date()}`,
			}
		case 'RESET_TRAINING':
			return {
				...state,
				state.isTrainingStarted = false,
      			state.currentSymbolNumber = 0,
      			state.symbolsTypedCount = 0,
      			state.wrongSymbolNumber = null,
      			state.startTime = null,
      			state.mistakesCount = 0,
			}
		case 'SET_WRONG_SYMBOL':
			return {
				...state,
				state.wrongSymbolNumber = state.currentSymbolNumber,
			}
		case 'INCREASE_MISTAKES':
			return {
				state.mistakesCount = state.mistakesCount + 1;
			}
		case 'CHANGE_CURRENT_SYMBOL':
			return {
				state.currentSymbolNumber = state.currentSymbolNumber + 1;
			}
		case 'LOAD_TEXT':
			return {
				state.trainingText = action.text.slice(0, 1).join(' ');
			}
		case 'SET_MESSAGE':
			return {
				state.messageText = action.mText;
			}

		default: 
		return state;
	}
}


export const startTraining () = ({ type: 'START_TRAINING' });
export const resetTraining () = ({ type: 'RESET_TRAINING' });
export const setWrongSymbol () = ({ type: 'SET_WRONG_SYMBOL' });
export const increaseMistakes () = ({ type: 'INCREASE_MISTAKES' });
export const changeCurrentSymbol () = ({ type: 'CHANGE_CURRENT_SYMBOL' });
export const loadText (text) = ({ type: 'LOAD_TEXT', text: text });
export const setMessage (mText) = ({ type: 'SET_MESSAGE', mText: text });


export default Reducer;
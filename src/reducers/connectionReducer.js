
const initialState = {
	isConnectionLost: false
};
connectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CONNECTION':
			
			return { ...state, isConnectionLost: action.payload };
		default:
			return state;
	}
};
export default connectionReducer;

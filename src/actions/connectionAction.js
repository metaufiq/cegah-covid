
const setConnectionLost = (conn) => async (dispatch) => {
	
	dispatch({
		type: 'SET_CONNECTION',
		payload: conn
	});
};

export default {
	setConnectionLost
};

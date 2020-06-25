
const initialState = {};
coronaDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CORONA_DATA':
			let indonesiaData = action.payload[0];
			let worldData = action.payload[1];
			let provincesData = action.payload[2]
			return { ...state, indonesiaData: indonesiaData, worldData: worldData, provincesData: provincesData };
		default:
			console.log('masuk default');

			return initialState;
	}
};
export default coronaDataReducer;

import kawalCoronaService from '../services/kawalCoronaService';
import kawalCovid19Service from '../services/kawalCovid19Service';

const getCoronaData = () => async (dispatch) => {
	let data = await Promise.all([
        kawalCoronaService.getIndonesiaCoronaData(),
		kawalCoronaService.getWorldCoronaData(),
		kawalCoronaService.getProvincesCoronaData()
    ]);
    
    
	dispatch({
		type: 'GET_CORONA_DATA',
		payload: data
	});
};

export default {
	getCoronaData
};

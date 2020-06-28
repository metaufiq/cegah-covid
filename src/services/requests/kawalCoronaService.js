import BaseResponse from "../responses/BaseResponse";

const apiEndPoint = 'https://api.kawalcorona.com/';

const getIndonesiaCoronaData = async () => {
	error = false
	let data = await fetch(apiEndPoint + 'indonesia').then((response) => response.json()).catch((e) => {
		error = e
	});

	if (error) {
		return new BaseResponse(error, 'error')

	}

	return new BaseResponse(data[0], 'success');
}

const getProvincesCoronaData = async () => {
	error = false
	let data = await fetch(apiEndPoint + 'indonesia/provinsi').then((response) => response.json()).catch((e) => {
		error = e

	});

	if (error) {
		return new BaseResponse(error, 'error')
	}

	return new BaseResponse(data, 'success')
};

const getWorldCoronaData = async () => {
	let data = await fetch(apiEndPoint).then((response) => response.json()).catch((e) => {
		error = e
	});

	if (error) {
		return new BaseResponse(error, 'error')
	}

	return new BaseResponse(data, 'success')
};

export default {
	getIndonesiaCoronaData,
	getWorldCoronaData,
	getProvincesCoronaData
};

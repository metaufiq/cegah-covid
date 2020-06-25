const apiEndPoint = 'https://api.kawalcorona.com/';

const getIndonesiaCoronaData = async () => {
	let data = await fetch(apiEndPoint + 'indonesia').then((response) => response.json()).catch((error) => {
		console.error(error);
	});

	data = data[0]
	return data;
};

const getProvincesCoronaData = async () => {
	let data = await fetch(apiEndPoint + 'indonesia/provinsi').then((response) => response.json()).catch((error) => {
		console.error(error);
	});
	return data;
};

const getWorldCoronaData = async () => {
	let data = await fetch(apiEndPoint).then((response) => response.json()).catch((error) => {
		console.error(error);
	});
	return data;
};

export default {
	getIndonesiaCoronaData,
	getWorldCoronaData,
	getProvincesCoronaData
};

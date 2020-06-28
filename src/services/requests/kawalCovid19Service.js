const apiEndPoint =
	'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json/';

const getProvincesCoronaData = async () => {
	return await fetch(apiEndPoint)
		.then((response) => response.json())
		.then((json) => {
			return json[0];
		})
		.catch((error) => {
			console.error(error);
		});
};

export default {
	getProvincesCoronaData
};

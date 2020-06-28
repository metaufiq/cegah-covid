/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import kawalCoronaService from '../../services/requests/kawalCoronaService';
import ProvinceComponent from './ProvinceComponent';
import connectionAction from '../../actions/connectionAction';
import { connect } from 'react-redux';
import { Banner, Button } from 'react-native-paper';

class ProvincesCovidComponent extends React.Component {
	state = {
		data: [],
		isDataLoaded: false,
	};

	getData = async () => {
		this.props.setConnectionLost(false)
		this.setState({ data: [], isDataLoaded: false })
		response = await kawalCoronaService.getProvincesCoronaData()
		if (response.type == "error") {
			this.props.setConnectionLost(true)
			this.setState({ data: [], isDataLoaded: true })
			return
		}
		this.props.setConnectionLost(false)
		this.setState({ data: response.data, isDataLoaded: true })
		this.setState({ data: response.data })
	}
	componentDidMount() {
		this.getData()
	}

	componentDidUpdate() {
		if (!this.props.state.connectionReducer.isConnectionLost && this.state.data.length == 0 && this.state.isDataLoaded) {
			this.getData()
		}
	}

	renderProvince = ({ item }) => {

		item = item.attributes;
		return (
			<ProvinceComponent item={item}></ProvinceComponent>
		);
	}

	renderProvinceKeyExtractor = (item) => item.attributes.FID.toString()
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={{ display: this.props.state.connectionReducer.isConnectionLost ? 'flex' : 'none', justifyContent: 'center', alignContent: 'center', flex: 1 }}>
					<Text style={{ textAlign: 'center', color: '#807B7B', paddingVertical: 15 }}>
						Koneksi Terputus
					</Text>
					<Button mode="contained" onPress={this.getData} style={{ width: 200, alignSelf: 'center' }}>
						Coba Lagi
  					</Button>
				</View>
				<View style={{ display: this.state.isDataLoaded && !this.props.state.connectionReducer.isConnectionLost ? 'flex' : 'none', flex: 1 }}>
					<View
						style={{
							flex: 4,
							flexDirection: 'row',
							paddingVertical: 30,
							justifyContent: 'center',
							alignItems: 'center',
							paddingRight: 5,
							elevation: 1,
							borderBottomColor: '#807B7B',
							marginBottom: 2
						}}
					>
						<View style={{ flex: 1 }}>
							<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Provinsi</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Positif</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Sembuh</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Meninggal</Text>
						</View>
					</View>
					<FlatList
						data={this.state.data}
						renderItem={this.renderProvince}
						keyExtractor={this.renderProvinceKeyExtractor}
					/>
				</View>
				<View style={{ display: this.state.isDataLoaded ? 'none' : 'flex', justifyContent: 'center', alignContent: 'center', flex: 1 }}>
					<ActivityIndicator size="large" color="#D9534F" />
				</View>
			</View>
		);
	}
}
function mapStateToProps(state) {
	return {
		state: state
	};
}

const mapDispatchToProps = {
	...connectionAction
};
export default connect(mapStateToProps, mapDispatchToProps)(ProvincesCovidComponent);
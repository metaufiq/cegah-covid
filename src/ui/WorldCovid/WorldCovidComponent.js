/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import kawalCoronaService from '../../services/requests/kawalCoronaService';
import CountryComponent from './CountryComponent';
import connectionAction from '../../actions/connectionAction';
import { connect } from 'react-redux';

class WorldCovidComponent extends React.Component {
	state = {
		data: [],
		isDataLoaded: false
	};


	getData = async () => {
		this.props.setConnectionLost(false)
		this.setState({ data: [], isDataLoaded: false })
		response = await kawalCoronaService.getWorldCoronaData()
		if (response.type == "error") {
			this.props.setConnectionLost(true)
			this.setState({ data: [], isDataLoaded: true })
			return
		}
		this.props.setConnectionLost(false)
		this.setState({ data: response.data, isDataLoaded: true })
		this.setState({ data: response.data })
	}



	renderCountry = ({ item }) => {
		item = item.attributes;

		return (
			<CountryComponent item={item}></CountryComponent>
		);
	}

	renderCountryKeyExtractor = (item) =>
		item.attributes.OBJECTID.toString()
	componentDidMount() {
		this.getData()


	}

	componentDidUpdate() {
		if (!this.props.state.connectionReducer.isConnectionLost && this.state.data.length == 0 && this.state.isDataLoaded) {
			this.getData()
		}
	}

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
							borderBottomColor: '#807B7B',
							marginBottom: 2,
							elevation: 1
						}}
					>
						<View style={{ flex: 1 }}>
							<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Country</Text>
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
						renderItem={this.renderCountry}
						keyExtractor={this.renderCountryKeyExtractor}
					/>
				</View>

				<View
					style={{
						display: this.state.isDataLoaded ? 'none' : 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						flex: 1
					}}
				>
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
export default connect(mapStateToProps, mapDispatchToProps)(WorldCovidComponent);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList, View } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import coronaDataAction from '../actions/coronaDataAction';

class WorldCovidComponent extends React.Component {
	state = {
		data: [],
		isLoadData: false
	};

	componentDidMount() {



	}

	componentDidUpdate() {
		if (this.props.state.coronaDataReducer.worldData) {
			this.setState({ isLoadData: true })
		}
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<View style={{ display: this.props.state.coronaDataReducer.worldData != undefined? 'flex' : 'none', flex: 1 }}>
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
						data={this.props.state.coronaDataReducer.worldData}
						renderItem={({ item }) => {
							item = item.attributes;

							return (
								<View
									style={{
										flex: 4,
										flexDirection: 'row',
										justifyContent: 'center',
										alignItems: 'center',
										marginBottom: 2,
										paddingRight: 5
									}}
								>
									<View style={{ flex: 1 }}>
										<Text style={{ textAlign: 'center', color: '#807B7B', paddingHorizontal: 5 }}>
											{item.Country_Region}
										</Text>
									</View>
									<View
										style={{
											flex: 1,
											backgroundColor: '#FEBE00',
											height: '100%',
											minHeight: 70,
											justifyContent: 'center',
											alignContent: 'center'
										}}
									>
										<Text style={{ textAlign: 'center', color: 'white' }}>{item.Confirmed}</Text>
									</View>
									<View
										style={{
											flex: 1,
											backgroundColor: '#5CB75C',
											height: '100%',
											minHeight: 70,
											justifyContent: 'center',
											alignContent: 'center',
											marginHorizontal: 1
										}}
									>
										<Text style={{ textAlign: 'center', color: 'white' }}>{item.Recovered}</Text>
									</View>
									<View
										style={{
											flex: 1,
											backgroundColor: '#D9534F',
											height: '100%',
											minHeight: 70,
											justifyContent: 'center',
											alignContent: 'center'
										}}
									>
										<Text style={{ textAlign: 'center', color: 'white' }}>{item.Deaths}</Text>
									</View>
								</View>
							);
						}}
						keyExtractor={(item) => item.attributes.FID}
					/>
				</View>

				<View
					style={{
						display: this.props.state.coronaDataReducer.worldData != undefined ? 'none' : 'flex',
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
	...coronaDataAction
};
export default connect(mapStateToProps, mapDispatchToProps)(WorldCovidComponent);
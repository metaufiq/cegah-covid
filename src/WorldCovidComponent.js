/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';

export default class WorldCovidComponent extends React.Component {
	state = {
		data: []
	};

	ambilData = () => {
		fetch('https://api.kawalcorona.com/')
			.then((response) => response.json())
			.then((json) => {
				this.setState({ data: json });
			})
			.catch((error) => {
				console.error(error);
			});
	};
	componentDidMount() {
		this.ambilData();
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'white' }}>
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
						<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Negara</Text>
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
					renderItem={({ item }) => {
						item = item.attributes;

						if (item.Provinsi == 'Indonesia') {
							return;
						}
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
		);
	}
}

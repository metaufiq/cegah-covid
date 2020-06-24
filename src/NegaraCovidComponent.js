/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default class NegaraCovidComponent extends React.Component {
	state = {
		data: false
	};

	ambilData = () => {
		fetch('https://api.kawalcorona.com/indonesia')
			.then((response) => response.json())
			.then((json) => {
				this.setState({ data: json[0] });
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
			<View
				style={{
					flex: 1,
					padding: 10,
					backgroundColor: 'white'
				}}
			>
				<View style={{ marginBottom: 20 }}>
					<Text style={{ textAlign: 'center', fontSize: 40 }}>Kasus Covid-19 Indonesia</Text>
				</View>

				<Card elevation={3}>
					<View style={{ padding: 10 }}>
						<Card.Content>
							<View style={{ justifyContent: 'center', alignContent: 'center', paddingBottom: 10 }}>
								<Text style={{ textAlign: 'center', fontSize: 30 }}>Positif</Text>
								<Text style={{ textAlign: 'center', fontSize: 40, color: '#FEBE00' }}>
									{this.state.data ? this.state.data.positif : '_'}
								</Text>
							</View>
						</Card.Content>
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<Card.Content>
								<View style={{ justifyContent: 'center', alignContent: 'center' }}>
									<Text style={{ textAlign: 'center', fontSize: 30 }}>Sembuh</Text>
									<Text style={{ textAlign: 'center', fontSize: 40, color: '#5CB75C' }}>
										{this.state.data.sembuh ? this.state.data.sembuh : '_'}
									</Text>
								</View>
							</Card.Content>
							<Card.Content>
								<View style={{ justifyContent: 'center', alignContent: 'center' }}>
									<Text style={{ textAlign: 'center', fontSize: 30 }}>Meninggal</Text>
									<Text style={{ textAlign: 'center', fontSize: 40, color: '#D9534F' }}>
										{this.state.data.meninggal ? this.state.data.meninggal : '_'}
									</Text>
								</View>
							</Card.Content>
						</View>
					</View>
				</Card>
			</View>
		);
	}
}

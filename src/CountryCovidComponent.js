/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Image, Linking } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default class CountryCovidComponent extends React.Component {
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

	openBNPBWebsite = () => {
		let url = 'https://bnpb.go.id/berita';
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log("Don't know how to open URI: " + url);
			}
		});
	};

	openKawalCovidTwitter = () => {
		let url = 'https://twitter.com/kawalcovid19';
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log("Don't know how to open URI: " + url);
			}
		});
	};

	render() {
		return (
			<View
				style={{
					flex: 1,

					backgroundColor: 'white'
				}}
			>
				<View style={{ marginBottom: 20, flex: 0.8, backgroundColor: '#D9534F',paddingTop:10 }}>
					<Text style={{ textAlign: 'center', fontSize: 40, color:'white' }}>Kasus Covid-19 Indonesia</Text>
				</View>

				<View style={{ flex: 1, padding: 10,marginTop:-180 }}>
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

					<View style={{ marginVertical: 30 }}>
						<Button
							icon="newspaper"
							mode="contained"
							onPress={this.openBNPBWebsite}
							color="#0000A4"
							style={{ paddingVertical: 10 }}
						>
							Berita Covid-19 BNPB
						</Button>
					</View>

					<View>
						<Button
							icon="twitter"
							mode="contained"
							onPress={this.openKawalCovidTwitter}
							color="#1DA1F2"
							style={{ paddingVertical: 10 }}
							labelStyle={{ color: 'white' }}
						>
							Twitter KawalCovid19
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

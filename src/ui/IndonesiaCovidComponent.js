/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Linking, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, Text, Banner } from 'react-native-paper';
import kawalCoronaService from '../services/requests/kawalCoronaService';
import { connect } from 'react-redux';
import connectionAction from '../actions/connectionAction';


class IndonesiaCovidComponent extends React.Component {
	state = {
		data: {},
		isConnectionLost: false
	};

	getData = async () => {

		response = await kawalCoronaService.getIndonesiaCoronaData()
		if (response.type == "error") {
			this.props.setConnectionLost(true)
			return
		}
		this.props.setConnectionLost(false)
		this.setState({ data: response.data })
	};


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
	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if (!this.props.state.connectionReducer.isConnectionLost && JSON.stringify(this.state.data) === JSON.stringify({})) {	
			this.getData()
		}
	}
	render() {

		return (
			<View
				style={{
					flexGrow: 1,
					backgroundColor: 'white',
				}}
			>
				<Banner
					visible={this.props.state.connectionReducer.isConnectionLost}
					actions={[
						{
							label: 'Coba Lagi',
							color: '#D9534F',
							onPress: this.getData,
						},
					]}>
					Terdapat Masalah Pada Jaringan Anda. Periksa Kembali Jaringan Anda
    			</Banner>
				<ScrollView>
					<View style={{ backgroundColor: '#D9534F', paddingTop: 10, minHeight: 200 }}>
						<Text style={{ textAlign: 'center', fontSize: 40, color: 'white' }}>Kasus Covid-19 Indonesia</Text>
					</View>
					<View style={{ padding: 10, marginTop: -80 }}>
						<Card elevation={3}>
							<View style={{ padding: 10 }}>
								<Card.Content>
									<View style={{ justifyContent: 'center', alignContent: 'center', paddingBottom: 10 }}>
										<Text style={{ textAlign: 'center', fontSize: 30 }}>Positif</Text>
										<Text style={{ textAlign: 'center', fontSize: 40, color: '#FEBE00' }}>
											{this.state.data.positif ? this.state.data.positif : '_'}
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
				</ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(IndonesiaCovidComponent);

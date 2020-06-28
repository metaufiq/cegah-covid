/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Linking } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import coronaDataAction from '../actions/connectionAction';
import { ScrollView } from 'react-native-gesture-handler';

class AboutComponent extends React.Component {
	state = {
		data: [],
		isLoadData: false
	};

	componentDidMount() {

	}

	contactMeGmail = () => {
		let url = 'mailto:taufiq1689@gmail.com';
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log("Don't know how to open URI: " + url);
			}
		});
	};

	openMyLinkedIn = () => {
		let url = 'https://www.linkedin.com/in/mtaufiqulsadi/';
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
			<View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
				<ScrollView>
					<View style={{ padding: 40 }}>
						<Text style={{ color: '#807B7B', textAlign: 'center' }}>Versi</Text>
						<View style={{ marginTop: 10 }}>
							<Text style={{ color: '#807B7B', textAlign: 'center' }}>0.5.0-beta</Text>
						</View>
					</View>
					<View style={{ padding: 20 }}>
						<Text style={{ color: '#807B7B', textAlign: 'center' }}>Sumber Data</Text>
						<View style={{ marginTop: 10 }}>
							<Text style={{ color: '#807B7B', textAlign: 'center', marginBottom: 10 }}>
								https://gis-kawalcovid19.hub.arcgis.com/datasets/kasus-covid19-indonesia/geoservice
						</Text>
							<Text style={{ color: '#807B7B', textAlign: 'center' }}>https://kawalcorona.com/api/</Text>
						</View>
					</View>

					<View style={{ padding: 20 }}>
						<View style={{ marginVertical: 30 }}>
							<Button
								icon="linkedin"
								mode="contained"
								onPress={this.openMyLinkedIn}
								color="#0070AC"
								style={{ paddingVertical: 10 }}
							>
								LinkedIn Saya
						</Button>
						</View>
						<View>
							<Button
								icon="email"
								mode="contained"
								onPress={this.contactMeGmail}
								color="#CF5C45"
								style={{ paddingVertical: 10 }}
							>
								Kirim Email Ke Saya
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
	...coronaDataAction
};
export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);

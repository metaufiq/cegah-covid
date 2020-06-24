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

export default class AboutComponent extends React.Component {
	state = {
		data: [],
		isLoadData: false
	};

	ambilData = () => {
		fetch(
			'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
		)
			.then((response) => response.json())
			.then((json) => {
				this.setState({ data: json.features, isLoadData: true });
			})
			.catch((error) => {
				console.error(error);
			});
	};
	componentDidMount() {
		this.ambilData();
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
			<View style={{ flex: 1, backgroundColor: 'white', justifyContent:'center' }}>
				<View style={{ padding: 20 }}>
					<Text style={{ color: '#807B7B',textAlign:'center' }}>Versi</Text>
					<Text style={{ color: '#807B7B',textAlign:'center' }}>0.5.0-beta</Text>
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
					<View >
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
			</View>
		);
	}
}

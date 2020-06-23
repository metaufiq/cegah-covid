/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class App extends React.Component {
	state = {
		data: {}
	};

	ambilData = () => {
		fetch(
			'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
		)
			.then((response) => response.json())
			.then((json) => {
				this.setState({ data: json.features });
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
			<View style={{  flex: 1 }}>
				<View
					style={{
						flex: 4,
						flexDirection: 'row',
						paddingVertical: 30,
						justifyContent: 'center',
						alignItems: 'center',
						paddingRight:5,
						borderBottomWidth:1,
						marginBottom:2
					}}
				>
					<View style={{ flex: 1 }}>
						<Text style={{ textAlign: 'center', fontWeight:'bold' }}>Provinsi</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Text style={{ textAlign: 'center', fontWeight:'bold' }}>Positif</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Text style={{ textAlign: 'center', fontWeight:'bold' }}>Sembuh</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Text style={{ textAlign: 'center', fontWeight:'bold' }}>Meninggal</Text>
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
									marginBottom:2,
									paddingRight:5
								}}
							>
								<View style={{ flex: 1 }}>
									<Text style={{ textAlign: 'center',color:'#807B7B',paddingHorizontal:5 }}>{item.Provinsi}</Text>
								</View>
								<View style={{ flex: 1, backgroundColor:'#FEBE00', height:'100%', minHeight:70, justifyContent:'center', alignContent:'center' }}>
									<Text style={{ textAlign: 'center', color:'white' }}>{item.Kasus_Posi}</Text>
								</View>
								<View style={{ flex: 1, backgroundColor:'#5CB75C', height:'100%', minHeight:70, justifyContent:'center', alignContent:'center',marginHorizontal:1 }}>
									<Text style={{ textAlign: 'center', color:'white' }}>{item.Kasus_Semb}</Text>
								</View>
								<View style={{ flex: 1, backgroundColor:'#D9534F', height:'100%', minHeight:70, justifyContent:'center', alignContent:'center' }}>
									<Text style={{ textAlign: 'center', color:'white' }}>{item.Kasus_Meni}</Text>
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

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	title: {
		fontSize: 32
	}
});

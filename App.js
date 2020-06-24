/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FonTisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NegaraCovidComponent from './src/NegaraCovidComponent';
import ProvincesCovidComponent from './src/ProvincesCovidComponent';
import WorldCovidComponent from './src/WorldCovidComponent';

const Tab = createMaterialBottomTabNavigator();
export default function App() {

	
	return (
		<NavigationContainer>
			<Tab.Navigator  initialRouteName={"Negara"} backBehavior={"none"} barStyle={{ backgroundColor: 'white' }} activeColor="#D3413E" >
				<Tab.Screen
					name="Provinsi"
					component={ProvincesCovidComponent}
					options={{
						tabBarLabel: 'Provinsi',
						tabBarIcon: ({ color }) => <MaterialIcons name="landscape" color={color} size={25} />,
						tabBarColor: 'red',
						
					}}
				
				/>
				<Tab.Screen
					name="Negara"
					component={NegaraCovidComponent}
					options={{
						tabBarLabel: 'Negara',
						tabBarIcon: ({ color }) => <FontAwesome5 name="landmark" color={color} size={20} />,
						tabBarColor: 'red'
					}}
				/>
				<Tab.Screen
					name="Dunia"
					component={WorldCovidComponent}
					options={{
						tabBarLabel: 'Dunia',
						tabBarIcon: ({ color }) => <FonTisto name="world-o" color={color} size={20} />,
						tabBarColor: 'blue'
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
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

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
import AboutComponent from './src/ui/AboutComponent';
import CountryCovidComponent from './src/ui/CountryCovidComponent';
import ProvincesCovidComponent from './src/ui/ProvincesCovidComponent';
import WorldCovidComponent from './src/ui/WorldCovidComponent';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={'Country'}
				backBehavior={'none'}
				barStyle={{ backgroundColor: 'white' }}
				activeColor="#D3413E"
			>
				<Tab.Screen
					name="Provinces"
					component={ProvincesCovidComponent}
					options={{
						tabBarLabel: 'Provinsi',
						tabBarIcon: ({ color }) => <MaterialIcons name="landscape" color={color} size={25} />
					}}
				/>
				<Tab.Screen
					name="Country"
					component={CountryCovidComponent}
					options={{
						tabBarLabel: 'Negara',
						tabBarIcon: ({ color }) => <FontAwesome5 name="landmark" color={color} size={20} />
					}}
				/>
				<Tab.Screen
					name="World"
					component={WorldCovidComponent}
					options={{
						tabBarLabel: 'Dunia',
						tabBarIcon: ({ color }) => <FonTisto name="world-o" color={color} size={20} />
					}}
				/>
				<Tab.Screen
					name="About"
					component={AboutComponent}
					options={{
						tabBarLabel: 'Tentang',
						tabBarIcon: ({ color }) => <FontAwesome5 name="question-circle" color={color} size={20} />
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

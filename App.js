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
import IndonesiaCovidComponent from './src/ui/IndonesiaCovidComponent';
import ProvincesCovidComponent from './src/ui/ProvincesCovid/ProvincesCovidComponent';
import WorldCovidComponent from './src/ui/WorldCovid/WorldCovidComponent';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={'Indonesia'}
				backBehavior={'none'}
				barStyle={{ backgroundColor: 'white' }}
				activeColor="#D3413E"
				shifting={false}
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
					name="Indonesia"
					component={IndonesiaCovidComponent}
					options={{
						tabBarLabel: 'Indonesia',
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

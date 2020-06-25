/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import redux from './src/reducers/';
import thunk from 'redux-thunk';


const store = createStore(combineReducers(redux), applyMiddleware(thunk));
const AppContainer = () => (
	<Provider store={store}>
		<App />
	</Provider>
);
AppRegistry.registerComponent(appName, () => AppContainer);

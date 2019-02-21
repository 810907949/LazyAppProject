
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions
} from 'react-native';

import Theme from '../config/Theme';
const { width, height } = Dimensions.get('window');

export default class SettingPage extends Component {

	render() {
		return (
		<View style={styles.container}>
			<StatusBar
				barStyle={Theme.barStyle}
				backgroundColor={Theme.primary}
			/>
		</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: Theme.paper,
	},
	title: {
		fontSize:25,
		backgroundColor: Theme.primary,
		width: width,
		height: 40,
		textAlign:'center'
	},
});
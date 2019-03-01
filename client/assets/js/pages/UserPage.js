
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Dimensions
} from 'react-native';

import {createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

import Theme from '../config/Theme';
const { width, height } = Dimensions.get('window');

export default class UserPage extends Component {

	render() {
	  return (
		<View style={styles.container}>
			<Text style={styles.title}>用户</Text>
			{/* <StatusBar
				barStyle={Theme.barStyle}
				backgroundColor={Theme.primary}
			/> */}
			<Button title='跳转登录页'
					onPress={()=>this.props.navigation.navigate('Login')}
			/>
			<Button title='跳转设置页'
					onPress={()=>this.props.navigation.navigate('Setting')}
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
		marginTop:25,
	},
	title: {
		fontSize:25,
		backgroundColor: Theme.primary,
		width: width,
		height: 40,
		textAlign:'center'
	},
});
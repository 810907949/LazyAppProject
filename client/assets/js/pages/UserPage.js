
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Dimensions,
  Linking,
  TouchableOpacity
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
			<TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={styles.item}>
				<Text style={styles.text}>登录</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} style={styles.item}>
				<Text style={styles.text}>设置</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={()=>Linking.openURL("tel:" + '10086')} style={styles.item}>
				<Text style={styles.text}>客服咨询</Text>
			</TouchableOpacity>
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
	item: {
		fontSize:14,
		backgroundColor: Theme.primary,
		color:"#444444",
		width: width,
		height: 40,
		marginTop:4,
	},
	text: {
		fontSize:14,
		height: 40,
		textAlignVertical:'center',
		color:"#444444",
	},
});
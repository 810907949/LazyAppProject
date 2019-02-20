
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class UserPage extends Component {

	render() {
	  return (
		<View style={styles.container}>
			<Text style={{fontSize:30}}>用户页面</Text>
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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
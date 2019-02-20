
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import SplashScreen from "rn-splash-screen";

export default class FirstPage extends Component {

	componentDidMount()
	{
		//隐藏闪屏页,闪屏页用的是第三方库，rn-splash-screen
		setTimeout(() => {
			SplashScreen.hide();
		}, 2000);//延时2秒消失
	}

	render() {
		return (
		<View style={styles.container}>
			<Text style={{fontSize:30}}>主页页面</Text>
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
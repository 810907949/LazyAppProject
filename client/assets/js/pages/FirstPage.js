// 首页

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
import SplashScreen from "rn-splash-screen";

import Theme from '../config/Theme';
const { width, height } = Dimensions.get('window');

export default class FirstPage extends Component {

	componentDidMount()
	{
		//隐藏闪屏页,闪屏页用的是第三方库，rn-splash-screen
		setTimeout(() => {
			if(Platform.OS === 'android')
				SplashScreen.hide();
		}, 2000);//延时2秒消失
	}

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.title}>首页</Text>
			<StatusBar
				barStyle={Theme.barStyle}
				// backgroundColor={Theme.primary}
				// 隐藏状态底板，内容区域从最顶上开始（与状态栏重叠），仍显示时间wifi等信息
				translucent={true} 
				backgroundColor={'#ffffff00'}
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
		backgroundColor: "#ffffff",
		marginTop:25
	},
	title: {
		fontSize:25,
		backgroundColor: Theme.primary,
		width: width,
		height: 40,
		textAlign:'center'
	},
});

'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  WebView
} from 'react-native';

import Theme from '../config/Theme';
const { width, height } = Dimensions.get('window');

// var DEFAULT_URL = 'https://m.jd.com/';
var DEFAULT_URL = 'https://www.baidu.com/';

export default class FindPage extends Component {

	render() {
		return (
		// <View style={styles.container}>
		// 	<Text style={styles.title}>发现</Text>
		// 	<StatusBar
		// 		barStyle={Theme.barStyle}
		// 		backgroundColor={Theme.primary}
		// 	/>
		// </View>
		<View style={{flex:1}}>
			<WebView
				source={{uri: DEFAULT_URL}}//新版本中的写法
				startInLoadingState={true}
				domStorageEnabled={true}//开启dom存贮
				javaScriptEnabled={true}//开启js
				style={styles.webview_style}
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
	webview_style:{
		backgroundColor:'#FFFFFF',
	}
});
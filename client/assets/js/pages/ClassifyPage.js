
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class ClassifyPage extends Component {

	render() {
		return (
		<View style={styles.container}>
			<Text style={{fontSize:30}}>分类页面</Text>
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
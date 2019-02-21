
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../config/Theme';
import SearchTextInput from '../components/SearchTextInput';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class ClassifyPage extends Component {
	constructor(props){
        super(props);
        this._onChangeText = this._onChangeText.bind(this);
        this.state = {
            showValue:"",
        }
    }

	_onChangeText(inputData){
        console.log("输入的内容",inputData);
        //把获取到的内容，设置给showValue
        this.setState({showValue:inputData});
    }

	showData(){
        alert(this.state.showValue);//展示输入框的内容
	}
	
	render() {
		return (
		<View style={styles.container}>
			<View style={styles.title}>
				<StatusBar
					barStyle={Theme.barStyle}
					backgroundColor={Theme.primary}
				/>
				<View style={[styles.searchTextInput]}>
					<SearchTextInput height={30} onChangeText={this._onChangeText.bind(this)} />
					<TouchableOpacity onPress={this.showData.bind(this)}>
						<View style={styles.btn}>
							<Text style={styles.wordC}>搜索</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			

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
	searchTextInput: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 5,
		alignItems: 'center',
	},
	title: {
		fontSize:25,
		backgroundColor: Theme.primary,
		width: width,
		height: 40,
		textAlign:'center',
	},
    btn:{
        width:50,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        // borderRadius:5
        borderWidth:0,
        marginLeft:-1,
    },
    wordC:{
        color:"#4876FF",
        fontSize:15,
    }

});
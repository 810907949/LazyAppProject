
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  StatusBar,
  Dimensions,
  FlatList,
  SectionList,
  Keyboard
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../config/Theme';
import Datum from '../config/Datum';
import SearchTextInput from '../components/SearchTextInput';
import ClassifyLeftItem from './ClassifyLeftItem';
import ClassifyRightPage from './ClassifyRightPage';
import NetMgr from '../managers/NetMgr';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class ClassifyPage extends Component {
	constructor(props){
        super(props);
        this._onChangeText = this._onChangeText.bind(this);
        this.state = {
			showValue:"",
			leftDataSource: Datum.classifyTypes,
			rightDataSource: Datum.classifyTypeDatas,
			curLeftSelectType:1,
		}
		
		let url = "http://39.107.235.229:8080/app/goods/list?keyword=%E5%9B%9B%E4%BB%B6&page=1"
		let data = {
			keyword:"四件",
			page:1
		}
		NetMgr.request(url, data, (responseStr)=>{
			console.log("data =============== ", responseStr.data.count)
		})
    }

	_onChangeText(inputData){
        //把获取到的内容，设置给showValue
        this.setState({showValue:inputData});
	}
	
	showData(){
		Keyboard.dismiss();
		alert(this.state.showValue);//展示输入框的内容
	}
	
	onSelectLeftItem(item){
        this.setState({curLeftSelectType:item.type});
	}

	onSelectRightItem(item){
        alert('onSelectRightItem' + item.key);
	}

	renderStatusBar() {
		return (
			<StatusBar
				barStyle={Theme.barStyle}
				backgroundColor={Theme.primary}
			/>)
	}

	renderSearchInput() {
		return (
			<View style={[styles.searchTextInput]}>
				<SearchTextInput {...this.props} height={30} searchRef="searchTextInput" onChangeText={this._onChangeText.bind(this)} />
				<TouchableOpacity onPress={this.showData.bind(this)}>
					<Text style={styles.searchBtn}>搜索</Text>
				</TouchableOpacity>
			</View>)
	}
	
	renderLeftItem(item) {
		return (
			<ClassifyLeftItem 
				onSelect={this.onSelectLeftItem.bind(this, item)}
				isSelect={this.state.curLeftSelectType==item.type}
				data={item}
				text={item.key}
			/>
		)
	}

	renderLeftScrollView() {
		return (
		<FlatList
			keyboardDismissMode='on-drag' // 拖动界面输入法退出
			keyboardShouldPersistTaps='never'
			data={this.state.leftDataSource}
			extraData={this.state}
			renderItem={({item}) => this.renderLeftItem(item)}
		/>
		)
	}

	renderRightScrollView() {
		return (
		<ClassifyRightPage data={this.state.rightDataSource[this.state.curLeftSelectType]}/>
		)
	}

	render() {
		return (
		<View style={styles.container}>
			<View style={styles.title}>
				{ this.renderStatusBar() }
				{ this.renderSearchInput() }
			</View>
				
			<View style={styles.scrollContent}>
				<View style={styles.scrollLeft}>
					{ this.renderLeftScrollView() }
				</View>
				<View style={styles.scrollRight}>
					{ this.renderRightScrollView() }
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
	searchBtn:{
		color:"#4876FF",
		fontSize:15,
		width:50,
		textAlign:'center',
	},
	scrollContent:{
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: Theme.primary,
		flexDirection: 'row',
	},
	scrollLeft:{
		backgroundColor: "#FFFFFF",
		width:80,
	},
	scrollRight:{
		backgroundColor:Theme.paper,
		width:width-80,
	},
	itemRight:{
		backgroundColor: "#FFFFFF",
		width:width-80,
		height: 40,
	},
});
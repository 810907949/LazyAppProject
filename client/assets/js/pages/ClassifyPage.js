
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  StatusBar,
  Dimensions,
  FlatList,
  SectionList,
  Keyboard,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../config/Theme';
import SearchTextInput from '../components/SearchTextInput';
import ClassifyLeftItem from './ClassifyLeftItem';
import ClassifyRightPage from './ClassifyRightPage';
import DataMgr from '../managers/DataMgr';

import LinearGradient from 'react-native-linear-gradient';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class ClassifyPage extends Component {
	constructor(props){
        super(props);
        this.state = {
			showValue:"",
			categoryList: [],
			categoryDetails: {},
			curSelectIndex: 0,
		}
		
		DataMgr.getCategoryAll((responseStr)=>{
			console.log("data =============== ", responseStr)
			this.setState({
				categoryList: responseStr.data.categoryList,
				categoryDetails: responseStr.data.allList,
			});
		})
	}

	onSelectLeftItem(index){
		if(index == this.state.curSelectIndex)
			return

		this.refs.rightPage.resetScrollView();
		this.setState({curSelectIndex:index});
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
				<TouchableOpacity onPress={()=>this.props.navigation.navigate('Search')}>
					<SearchTextInput {...this.props} width={width-15} height={30} searchRef="searchTextInput" placeholder="搜索店内宝贝" editable={false} />
				</TouchableOpacity>
			</View>)
	}
	
	renderLeftItem(item, index) {
		console.log("renderLeftItem === item == " + item + "   index == " + index)
		return (
			<ClassifyLeftItem 
				onSelect={this.onSelectLeftItem.bind(this, index)}
				isSelect={this.state.curSelectIndex==index}
				data={item}
				text={item.name}
			/>
		)
	}

	renderLeftScrollView() {
		return (
		<FlatList
			keyboardDismissMode='on-drag' // 拖动界面输入法退出
			keyboardShouldPersistTaps='never'
			data={this.state.categoryList}
			extraData={this.state}
			keyExtractor ={(item, index) => index.toString()}
			renderItem={({item, index}) => this.renderLeftItem(item, index)}
		/>
		)
	}

	renderRightScrollView() {
		if(this.state.categoryList.length == 0)
			return

		return (
			<ClassifyRightPage 
				ref={"rightPage"}
				data={this.state.categoryDetails[this.state.categoryList[this.state.curSelectIndex].id]}
			/>
		)
	}

	render() {
		return (
		<View style={styles.container}>
			<LinearGradient colors={['#008B8B', '#66CDAA', '#FFFFFF']}
				style={{width: width, height: height/2,
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,}}>
			</LinearGradient>

			<View style={styles.title}>
				{/* { this.renderStatusBar() } */}
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
		// backgroundColor: Theme.primary,
		width: width,
		height: 40,
		textAlign:'center',
		marginTop:30,
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
		backgroundColor: "#FFFFFF00",
		flexDirection: 'row',
	},
	scrollLeft:{
		width:80,
	},
	scrollRight:{
		width:width-80,
	},
	itemRight:{
		backgroundColor: "#FFFFFF",
		width:width-80,
		height: 40,
	},
});
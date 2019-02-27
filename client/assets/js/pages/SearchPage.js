
'use strict';
import React, { Component } from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
	Keyboard,
	FlatList,
	Image,
	TouchableHighlight
} from 'react-native';

import Theme from '../config/Theme';
const { width, height } = Dimensions.get('window');
import SearchTextInput from '../components/SearchTextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import DataMgr from '../managers/DataMgr';

export default class SearchPage extends Component {

	constructor(props){
        super(props);
        this.state = {
			showValue:"",
			defaultSearchValue:"沃生",
			showData:[],
		}

		this.onClickItem.bind(this)
		//定义空布局
		this.emptyComponent = () => {
			return <View style={{
			  height: '100%',
			  alignItems: 'center',
			  justifyContent: 'center',
			}}>
			  <Text style={{
				fontSize: 16
			  }}>暂无数据下拉刷新</Text>
			</View>
		  }
		
		// let url = "http://www.cheam.top:8080/app/goods/list?keyword=%E5%9B%9B%E4%BB%B6&page=1"
		// let data = {
		// 	keyword:"四件",
		// 	page:1
		// }
		// NetMgr.request(url, data, (responseStr)=>{
		// 	console.log("data =============== ", responseStr.data.count)
		// })
    }
	
	
	// shouldComponentUpdate(nextProps,nextState){
	// 	return (this.state.showData != nextState.showData);
	// }

	_onChangeText(inputData){
        //把获取到的内容，设置给showValue
        this.setState({showValue:inputData});
	}
	
	onClickSearch(){

		let searchValue = this.state.showValue
		if(searchValue == "")
		{
			searchValue = this.state.defaultSearchValue
		}

		Keyboard.dismiss();
		DataMgr.getGoodList({ keyword:searchValue, sort:"retail_price", order: "desc"}, (responseStr)=>{
			console.log("getGoodList =========== " + responseStr)
			if (responseStr.data.goodsList.length == 0)
			{
				alert("没有符合您要求的商品");
			}
			this.setState({showData:responseStr.data.goodsList})
		})
	}
	
	onClickReturn(){
		Keyboard.dismiss();
		this.props.navigation.goBack()
	}

	onClickItem(item){
		alert("当前点击：" + item.name);
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
			<View style={styles.searchTextInput}>
				{/* <TouchableOpacity onPress={this.onClickReturn.bind(this)}>
					<Icon 
					name='ios-arrow-back'
					size={26}
					style={styles.back}
					/> 
				</TouchableOpacity> */}
				<SearchTextInput {...this.props} 
					returnKeyType="search"
					width={width-55} 
					height={30} 
					placeholder={this.state.defaultSearchValue} 
					autoFocus={true} 
					onChangeText={this._onChangeText.bind(this)} 
					onSubmit={this.onClickSearch.bind(this)} 
				/>
				<TouchableOpacity onPress={this.onClickReturn.bind(this)}>
					<Text style={styles.cancelBtn}>取消</Text>
				</TouchableOpacity>
			</View>
		)
	}

	renderSubItem({item, index}){
		return (
			<TouchableOpacity activeOpacity={0.5} onPress={()=>{this.onClickItem(item)}}>
				<View style={{flexDirection: 'row', width: width-10, marginTop: 5, backgroundColor:"white",borderRadius: 10}}>
						<Image source={{uri: item.picUrl}}
							style={{width: 120, height: 120,borderTopLeftRadius: 10,borderBottomLeftRadius: 10}}></Image>
						<View>
							<Text style={styles.itemName}>{item.name}</Text>
							<Text style={styles.itemBrief}>{item.brief}</Text>
							<Text style={styles.itemRetailPrice}>{"¥" + item.retailPrice}</Text>
						</View>
				</View>
			</TouchableOpacity>
			)
	}
	
	_separator = () => {
		return <View style={{height:1,backgroundColor:'#F5F5F5', left: 125, top: 2}}/>;
	}

	render() {
		return (
		<View style={styles.container}>
			{ this.renderStatusBar() }
			{ this.renderSearchInput() }
			<View style={styles.scrollView}>
				<FlatList
					data={this.state.showData}
					extraData={this.state}
					numColumns={1}
					keyExtractor ={(item, index) => index.toString()}
					renderItem={this.renderSubItem.bind(this)}
					// ItemSeparatorComponent={this._separator}
					// ListEmptyComponent={this.emptyComponent}
				/>
			</View>
		</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: Theme.primary,
		width: width,
	},
	searchTextInput: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 5,
		alignItems: 'center',
	},
	scrollView: {
		flex: 1,
		marginLeft:5,
		marginRight:5,
		marginTop: 5,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: Theme.primary,
		width:width,
		marginBottom: 5
	},
	back: {
		marginLeft: 10,
	},
	cancelBtn:{
		marginLeft: 5,
		color:"#888888",
		fontSize:15,
		textAlign:'center',
	},
	itemName:{
		left:10,
		color:"#000000",
		fontSize:14,
		width:width-140,
	},
	itemBrief:{
		left:10,
		top:5,
		color:"#555555",
		fontSize:12,
	},
	itemRetailPrice:{
		left:10,
		top:45,
		color:"#FF0000",
		fontSize:17,
	},
	
});
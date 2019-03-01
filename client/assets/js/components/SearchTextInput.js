/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {View, TextInput, Dimensions, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class SearchTextInput extends Component
{
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        iconSize: PropTypes.number,
		placeholder: PropTypes.string,
		searchRef: PropTypes.string,
		editable: PropTypes.bool,
		autoFocus: PropTypes.bool,
        onChangeText: PropTypes.func,
		onSubmit: PropTypes.func,
		returnKeyType: PropTypes.string,
		value:PropTypes.string,
    };

    static defaultProps = {
		width: width - 60,
		height:40,
		iconSize:26,
		searchRef:"searchRef",
		editable:true,
		autoFocus:false,
		placeholder:"在这里输入搜索内容",
		returnKeyType:"done",
	};
	
	constructor(props){
        super(props);
        this.state = {
			value:"",
		}
    }
	
	shouldComponentUpdate(nextProps,nextState){
		return (this.state.value != nextState.value);
	}

	onChangeText(inputData)
	{
		this.setState({value:inputData});
		if(this.props.onChangeText)
		{
			this.props.onChangeText(inputData);
		}
	}

	onClickCancel()
	{
		let input = this.refs[this.props.searchRef];
		if(input)
		{
			input.clear();
			this.setState({value:""});
		}
	}

	renderCancelBtn()
	{
		if(this.state.value != "")
		{
			return(
			<TouchableOpacity onPress={this.onClickCancel.bind(this)}>
				<Icon 
					name={'closecircleo'}
					size={20}
					style={{
						color: "#000000"
					}}
				/>	
			</TouchableOpacity>)
		}
	}

    render() {
        return (
            <View style={{
				width: this.props.width,
				height:this.props.height,
				borderColor:"#ebebeb",
				backgroundColor:"#EEEEEE",
				borderWidth:1,
				marginLeft:10,
				borderRadius:20,
				flexDirection: 'row',
				alignItems: 'center',
			}}>
				<Icon 
					name={'search1'}
					size={this.props.iconSize}
					style={{
						marginLeft:10,
					}}
				/>
				<TextInput
					placeholder={this.props.placeholder}
					returnKeyType ={this.props.returnKeyType}
					editable={this.props.editable}
					autoFocus={this.props.autoFocus}
					ref={this.props.searchRef}
					style={{
						width: this.props.width - 65,
						height:this.props.height,
						borderWidth:0,
						marginLeft:0,
						paddingVertical: 0,
					}}//input框的基本样式
					onChangeText={this.onChangeText.bind(this)}//输入框改变触发的函数
					onSubmitEditing={this.props.onSubmit}
				/>
				{
					this.renderCancelBtn()
				}
			</View>
		);
	}
}

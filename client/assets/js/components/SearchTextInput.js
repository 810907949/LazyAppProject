/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {View, TextInput, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
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
        onChangeText: PropTypes.func.isRequired,
    };

    static defaultProps = {
		width: width - 60,
		height:40,
		iconSize:26,
		searchRef:"",
		placeholder:"在这里输入搜索内容",
    };

    render() {
        return (
            <View style={{
				width: this.props.width,
				height:this.props.height,
				borderColor:"#ebebeb",
				backgroundColor:"white",
				borderWidth:1,
				marginLeft:10,
				borderRadius:20,
				flexDirection: 'row',
				alignItems: 'center',
			}}>
				<Icon 
					name={'ios-search'}
					size={this.props.iconSize}
					style={{
						marginLeft:10,
					}}
				/>
				<TextInput
					placeholder={this.props.placeholder}
					returnKeyType ="done"
					ref={this.props.searchRef}
					style={{
						width: this.props.width - 50,
						height:this.props.height,
						borderWidth:0,
						marginLeft:5,
						paddingVertical: 0,
					}}//input框的基本样式
					onChangeText={this.props.onChangeText}//输入框改变触发的函数
				>
				</TextInput>
			</View>
		);
	}
}


'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

export default class ClassifyLeftItem extends Component {

    static propTypes = {
		isSelect: PropTypes.bool.isRequired,
		data: PropTypes.object,
		text: PropTypes.string.isRequired,
		onSelect: PropTypes.func,
    };

	shouldComponentUpdate(nextProps,nextState){
        return (this.props.data != nextProps.data || this.props.isSelect != nextProps.isSelect);
	}
	
	render() {
		return (
			<TouchableOpacity activeOpacity={0.5} style={this.props.isSelect ? styles.selected : styles.unSelect} onPress={this.props.onSelect}>
				<Text style={this.props.isSelect ? styles.textSelected :styles.textUnSelect}>{this.props.text}</Text>
			</TouchableOpacity>
		)
	}

}

const styles = StyleSheet.create({
	selected:{
		fontSize:20,
		width:80,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#FFFFFF",
		marginBottom: 2,
	},
	unSelect:{
		fontSize:15,
		width:80,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#F5F5F5",
		marginBottom: 2,
	},
	textSelected:{
		fontWeight:'normal',
		fontSize:12,
		color:"red"
	},
	textUnSelect:{
		fontWeight:'normal',
		fontSize:12,
		color:"#555555"
	},
});
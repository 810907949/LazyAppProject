
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  View
} from 'react-native';

import PropTypes from 'prop-types';

// import ClassifyRightItem from './ClassifyRightItem';

export default class ClassifyRightPage extends Component {

    static propTypes = {
		data: PropTypes.array,
    };

	// shouldComponentUpdate(nextProps,nextState){
	// 	return (this.props.data != nextProps.data);
	// }
	
	renderItem(item) {
		return (
			<View>
				<Image source={{uri: 'http://www.cheam.top:7000/test1.png'}}
					style={{width: 200, height: 200}}></Image>
				<Text>{item.key}</Text>
			</View>
		)
	}

	render() {
		return (
		<FlatList
			data={this.props.data}
			extraData={this.state}
			style={styles.container}
			renderItem={({item}) => this.renderItem(item)}
		/>
		)
	}

}

const styles = StyleSheet.create({

	container:{
		marginLeft: 2,
		marginTop: 2,
	},

});
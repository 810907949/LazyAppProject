
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

import PropTypes from 'prop-types';

// import ClassifyRightItem from './ClassifyRightItem';

export default class ClassifyRightPage extends Component {

    static propTypes = {
		data: PropTypes.array,
    };

	shouldComponentUpdate(nextProps,nextState){
		return (this.props.data != nextProps.data);
	}
	
	renderItem(item) {
		return (
			<Text>{item.key}</Text>
			// <ClassifyRightItem data={item}/>
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
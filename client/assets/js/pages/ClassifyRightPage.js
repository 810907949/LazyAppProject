
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  View,
  Dimensions
} from 'react-native';

import PropTypes from 'prop-types';
const { width, height } = Dimensions.get('window');

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
			<View style={{marginLeft:2, marginTop:5}}>
				<Image source={{uri: 'http://www.cheam.top:7000/test1.png'}}
					style={{width: (width-90)/2, height: 200}}></Image>
				<Text>{item.name}</Text>
			</View>
		)
	}

	resetScrollView(){
		this.refs.scrollView.scrollToIndex({index:0,animated:true})
	}

	render() {
		return (
		<FlatList
			ref={"scrollView"}
			data={this.props.data}
			extraData={this.state}
			style={styles.container}
			numColumns={2}
			keyExtractor ={(item, index) => index.toString()}
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
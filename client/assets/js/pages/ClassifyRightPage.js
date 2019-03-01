
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
		picUrl: PropTypes.string,
    };

	shouldComponentUpdate(nextProps,nextState){
		return (this.props.data != nextProps.data);
	}
	
	renderItem({item}) {
		return (
			<View style={{marginLeft:10, marginBottom:10}}>
				<Image source={{uri: item.picUrl}}
					style={{width: (width - 120)/3, height: (width - 120)/3, borderRadius: 5}}></Image>
				<Text style={{color:"#444444", fontSize:12, textAlign:"center"}}>{item.name}</Text>
			</View>
		)
	}

	resetScrollView(){
		this.refs.scrollView.scrollToIndex({index:0,animated:true})
	}
	
	renderHeader() {
		return (
			<View style={{marginLeft:10, marginBottom:10}}>
				<Image source={{uri: this.props.picUrl}}
					style={{width: (width - 100), height:90, borderRadius: 5}}></Image>
			</View>
		)
	}

	render() {
		return (
		<FlatList
			ListHeaderComponent={this.renderHeader.bind(this)}
			ref={"scrollView"}
			data={this.props.data}
			extraData={this.state}
			style={styles.container}
			numColumns={3}
			keyExtractor ={(item, index) => index.toString()}
			renderItem={this.renderItem.bind(this)}
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
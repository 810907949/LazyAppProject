/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  Easing,
  View,
  Image
} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Theme from './config/Theme';
import FirstPage from './pages/FirstPage';
import ClassifyPage from './pages/ClassifyPage';
import FindPage from './pages/FindPage';
import UserPage from './pages/UserPage';
import SettingPage from './pages/SettingPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import GiftPage from './pages/GiftPage';
import AllGoodsPage from './pages/AllGoodsPage';

const MainStack = createBottomTabNavigator(
	{
		First: 
		{ 
			screen: FirstPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:({focused,tintColor}) => (  
					<Text style={[styles.tabBarLabel, {color: tintColor}]}>首页</Text>
				)  , 
				tabBarIcon:({focused,tintColor}) => (  
					<Image 
						source={focused ? require("../res/index/mainB.png") : require("../res/index/main.png")}
						style={[styles.tabBarIcon, {tintColor:tintColor}]}
					/>
				)  
			}),  
		},
		Classify: 
		{ 
			screen: ClassifyPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:({focused,tintColor}) => (  
					<Text style={[styles.tabBarLabel, {color: tintColor}]}>分类</Text>
				)  ,  
				tabBarIcon:({focused,tintColor}) => (  
					<Image 
						source={focused ? require("../res/index/classB.png") : require("../res/index/class.png")}
						style={[styles.tabBarIcon, {tintColor:tintColor}]}
					/>
				)  
			}),  
		},
		Gift:
		{
			screen: GiftPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:({focused,tintColor}) => (  
					<Text style={[styles.tabBarLabel, {color: tintColor}]}>礼品系列</Text>
				)  , 
				tabBarIcon:({focused,tintColor}) => (  
					<Image 
						source={focused ? require("../res/index/articleB.png") : require("../res/index/article.png")}
						style={[styles.tabBarIcon, {tintColor:tintColor}]}
					/>
				)  
			}),  
		},
		All:
		{
			screen: AllGoodsPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:({focused,tintColor}) => (  
					<Text style={[styles.tabBarLabel, {color: tintColor}]}>全部宝贝</Text>
				)  , 
				tabBarIcon:({focused,tintColor}) => (  
					<Image 
						source={focused ? require("../res/index/snsB.png") : require("../res/index/sns.png")}
						style={[styles.tabBarIcon, {tintColor:tintColor}]}
					/>
				)  
			}),  
		},
		
		// Find: 
		// { 
		// 	screen: FindPage,
		// 	navigationOptions:({navigation}) => ({  
		// 		tabBarLabel:({focused,tintColor}) => (  
		// 			<Text style={[styles.tabBarLabel, {color: tintColor}]}>发现</Text>
		// 		)  , 
		// 		tabBarIcon:({focused,tintColor}) => (  
		// 			<Icon 
        //             name={focused ? 'ios-send' : 'ios-send'}
        //             size={24}
        //             style={[styles.tabBarIcon, {color: tintColor}]}
		// 			/> 
		// 		)  
		// 	}),  
		// },
		User: 
		{
			screen: UserPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:({focused,tintColor}) => (  
					<Text style={[styles.tabBarLabel, {color: tintColor}]}>用户</Text>
				),
				tabBarIcon:({focused,tintColor}) => ( 
					<Image 
						source={focused ? require("../res/index/myB.png") : require("../res/index/my.png")}
						style={[styles.tabBarIcon, {tintColor:tintColor}]}
					/>
				)  
			}),  
		},
	},
	{
		backBehavior:"none",
		animationEnabled: true,
		swipeEnabled: true,
		tabBarOptions: {
			// activeTintColor: "#00AF8D",
			activeTintColor: "red",
			inactiveTintColor: '#444444',
			style :{
				borderTopColor:'#ebebeb',
				borderTopWidth:1,
				height:53,
				backgroundColor:'white',
				justifyContent: 'center',
				alignItems: 'center',
			}
		},
	}
);


const RootStack = createStackNavigator(   //根路由
	{
		Main:
		{
			screen: MainStack,
			navigationOptions:({navigation}) => ({  
				header:null,
			})
		},
		Setting:
		{ 
			screen: SettingPage ,
			navigationOptions:({navigation}) => ({  
				title:"设置",
			})
		},
		Login:
		{ 
			screen: LoginPage ,
			navigationOptions:({navigation}) => ({  
				title:"登录",
			})
		},
		Search:
		{ 
			screen: SearchPage ,
			navigationOptions:({navigation}) => ({  
				header:null,
			})
		},
	},
	{
		navigationOptions: ({navigation}) => ({
			title: navigation.state.routeName,
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		}),
		transitionConfig: () => ({
			transitionSpec: {
			  duration: 500,
			  easing: Easing.out(Easing.poly(4)),
			  timing: Animated.timing,
			},
			screenInterpolator: sceneProps => {
				const {layout, position, scene} = sceneProps;
                const {index} = scene;
                const Width = layout.initWidth;
                //沿X轴平移
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [Width, 0, -(Width - 10)],
                });
                //透明度
                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });
                return {opacity, transform: [{translateX}]};
			},
		}),
	}
  );


const styles = StyleSheet.create({
	tabBarLabel: {
		fontSize:11,
		textAlign:'center',
		top:-4
	},
	tabBarIcon: {
		bottom:0,
	},
});

const App = createAppContainer(RootStack)
export default App

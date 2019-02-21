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
  Easing
} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';

import Theme from './config/Theme';
import FirstPage from './pages/FirstPage';
import ClassifyPage from './pages/ClassifyPage';
import FindPage from './pages/FindPage';
import UserPage from './pages/UserPage';
import SettingPage from './pages/SettingPage';
import LoginPage from './pages/LoginPage';

const MainStack = createBottomTabNavigator(   //二级路由
	{
		First: 
		{ 
			screen: FirstPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'首页',  
				tabBarIcon:({focused,tintColor}) => (  
					<Icon 
                    name={focused ? 'ios-home' : 'ios-home'}
                    size={26}
                    style={{color: tintColor}}
					/> 
				)  
			}),  
		},
		Classify: 
		{ 
			screen: ClassifyPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'分类',  
				tabBarIcon:({focused,tintColor}) => (  
					<Icon 
                    name={focused ? 'ios-paper' : 'ios-paper'}
                    size={26}
                    style={{color: tintColor}}
					/> 
				)  
			}),  
		},
		Find: 
		{ 
			screen: FindPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'发现',  
				tabBarIcon:({focused,tintColor}) => (  
					<Icon 
                    name={focused ? 'ios-search' : 'ios-search'}
                    size={26}
                    style={{color: tintColor}}
					/> 
				)  
			}),  
		},
		User: 
		{
			screen: UserPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'用户',  
				tabBarIcon:({focused,tintColor}) => ( 
					<Icon 
                    name={focused ? 'ios-person' : 'ios-person'}
                    size={26}
                    style={{color: tintColor}}
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
			activeTintColor: Theme.primarySelected,
			inactiveTintColor: 'black',
			// activeBackgroundColor: "",
			// inactiveBackgroundColor: "",
			style :{
				borderTopColor:'#ebebeb',
				borderTopWidth:1,
				backgroundColor:'white',
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


const App = createAppContainer(RootStack)
export default App

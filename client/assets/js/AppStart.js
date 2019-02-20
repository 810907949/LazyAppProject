/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

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
					<Text> ffff</Text> 
				)  
			}),  
		},
		Classify: 
		{ 
			screen: ClassifyPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'分类',  
				tabBarIcon:({focused,tintColor}) => (  
					<Text> ffff</Text> 
				)  
			}),  
		},
		Find: 
		{ 
			screen: FindPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'发现',  
				tabBarIcon:({focused,tintColor}) => (  
					<Text> ffff</Text> 
				)  
			}),  
		},
		User: 
		{
			screen: UserPage,
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'用户',  
				tabBarIcon:({focused,tintColor}) => (  
					<Text> ffff</Text> 
				)  
			}),  
		},
	},
);

const RootStack = createStackNavigator(   //根路由
	{
		Tab:
		{
			screen: MainStack,
			navigationOptions:({navigation}) => ({  
				header:null,
			})
		},
		Setting:
		{ 
			screen: SettingPage 
		},
		Login:
		{ 
			screen: LoginPage 
		},
	},
  );
  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = createAppContainer(RootStack)
export default App

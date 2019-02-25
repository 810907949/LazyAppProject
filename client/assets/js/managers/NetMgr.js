/**
 * 网络请求的实现
 */

'use strict';
import React, {
  Component,
} from 'react-native';


export default class NetMgr
{
	static request(url, data, callback) {
		// var fetchOptions = {
		// 	method: 'POST',
		// 	headers: {
		// 	'Accept': 'application/json',
		// 	'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	body:'data='+data+''//这里我参数只有一个data,大家可以还有更多的参数
		// };
		// fetch(url, fetchOptions)
		fetch(url)
		.then((response) => response.text())
		.then((responseText) => {
			callback(JSON.parse(responseText));
		}).done();
	}
}
/**
 * 网络请求的实现
 */

'use strict';
import React, {
  Component,
} from 'react-native';


export default class NetMgr
{
	static post(url, data, callback) {
		var fetchOptions = {
			method: 'POST',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
			body:JSON.stringify(data)
		};
		fetch(url, fetchOptions)
		.then((response) => response.text())
		.then((responseText) => {
			console.log("post url == ", responseText);
			callback(JSON.parse(responseText));
		}).done();
	}
	
	static get(url, callback) {
		fetch(url)
		.then((response) => response.text())
		.then((responseText) => {
			console.log("get url == ", responseText);
			callback(JSON.parse(responseText));
		}).done();
	}
}
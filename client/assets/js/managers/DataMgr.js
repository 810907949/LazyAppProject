/**
 * 网络请求的实现
 */

'use strict';
import React, {
  Component,
} from 'react-native';


import NetMgr from './NetMgr';

export default class DataMgr
{
	static getCategoryAll(callback) 
	{
		NetMgr.get("http://www.cheam.top:8080/app/category/all", callback)
	}
	
	static getCategoryDetail(id, callback) 
	{
		//http://www.cheam.top:8080/app/category/current?id=1005000
		NetMgr.get("http://www.cheam.top:8080/app/category/current?id=" + id, callback)
	}
	
	/*
	根据条件搜索商品
		categoryId	类别id
		keyword		关键字
		page		页数 默认1
		size		每页数量默认10
		sort 		支持"add_time","retail_price", "name"
		order 		升序或者降序， desc降序， asc 升序 默认desc
	*/
	static getGoodList(data, callback)
	{
		NetMgr.post("http://www.cheam.top:8080/app/goods/list?", data, callback)
	}
	
	static getGoodDetail(id, callback) {
		//http://www.cheam.top:8080/app/goods/detail?id=1006010
		NetMgr.get("http://www.cheam.top:8080/app/goods/detail?id=" + id, callback)
	}
}
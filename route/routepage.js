'use strict'

//library
var m_express = require('express');
var m_app = m_express();
var m_router = m_express.Router();
var m_MobileDetect = require('mobile-detect');
var m_path = require('path');

//local var
var m_szHtmlPath = __dirname + "/../html";
var m_szServerPath = m_app.get('domain name') + ":" + m_app.get('port');

m_app.set( 'views', m_szHtmlPath );

function fnGetDeviceName( request ){
	var md = new m_MobileDetect(request.headers['user-agent']);
	//return (md.mobile() == null) ? "DESKTOP" : "MOBILE";
	return "DESKTOP";
}

//products
var objProducts = {
	1 : {"id":1, "name":"工業營業用變頻水冷扇", "parentId":0, "childId":[2,3], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5bel5qWt5rC05Ya35omH57O75YiXXzE2MTAxMjAxMTE0Ng==.jpg", "https://www.yasuda.com.tw/archive/product/original/bTUwMi1jb29sXzE3MDUyOTEwMjk0MA==.jpg"], "details":[]},
	2 : {"id":2, "name":"工業排風扇", "parentId":1, "childId":[], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5bel5qWt5o6S6aKo5omHXzE2MTAxMjAxMDg0Ng==.jpg", "https://www.yasuda.com.tw/archive/product/original/5aSn5Z6L5o6S6aKo5omHLOW7oOaIv+mAmumiqCzpgJrpoqjoqK3lgplfMTYwNzI5MDE1NTQx.jpg"], "details":[
		{"type":"spec", "data":{
			"外框" : "SMC 玻璃纖維複合材料",
			"葉片" : "50",
			"葉數" : "七葉塑鋼",
			"馬達" : "1.5HP F級，12Pole",
			"電壓" : "可依區域，國別訂製",
			"轉速" : "430~470 RPM",
			"音量" : "70~75dB",
			"尺寸" : "145×145×67cm",
			"總重量" : "73Kg",
		}},
		{"type":"photo", "data":[
			"https://www.yasuda.com.tw/archive/images/130757Y7.jpg",
			"https://www.yasuda.com.tw/archive/images/%5EBB4A6B4E76A096B1B1C531670ACB35A8E296E428594943B878%5Epimgpsh_fullsize_distr.jpg"
		]},
	]},
	3 : {"id":3, "name":"溫室專用通風設備", "parentId":1, "childId":[4,5], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5rqr5a6k5bCI55So6YCa6aKo6Kit5YKZXzE2MTAxMjAxMTAwNw==.jpg", "https://www.yasuda.com.tw/archive/product/original/5aSn5Z6L5o6S6aKo5omHLOmAmumiqOioreWCmV8xNjA3MjkwMjE2NDc=.jpg"], "details":[]},
	4 : {"id":4, "name":"畜牧專用通風設備", "parentId":3, "childId":[], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/55Wc54mn5bCI55So6YCa6aKo6Kit5YKZXzE2MTAxMjAxMTA0MA==.jpg", "https://www.yasuda.com.tw/archive/product/original/SW1nMTg5MC0xKDM1MHgzNTApXzE3MDExNjA4NTQwNw==.jpg"], "details":[
		{"type":"spec", "data":{
			"外框" : "SMC 玻璃纖維複合材料",
			"葉片" : "50",
			"葉數" : "三葉SMC",
			"馬達" : "1.5HP F級，12Pole",
			"馬達" : "2HP F級，10Pole",
			"電壓" : "可依區域，國別訂製",
			"轉速" : "550~590 RPM",
			"音量" : "70~75dB",
			"尺寸" : "145×145×122cm",
			"總重量" : "85Kg",
		}},
		{"type":"photo", "data":[
			"https://www.yasuda.com.tw/archive/images/1418309688555.jpg"
		]},
	]},
	5 : {"id":5, "name":"輕鋼架循環扇", "parentId":3, "childId":[6], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/6LyV6Yu85p625b6q55Kw5omHXzE2MTAxMjAxMTA1Mg==.jpg", "https://www.yasuda.com.tw/archive/product/original/5aSp6Iqx5p2-5b6q55Kw6aKo5omHLOi8lemLvOaetuW+queSsOaJhyzpgJrpoqjoqK3lgplfMTYwNzI5MDIzMjI4.jpg"], "details":[]},
	6 : {"id":6, "name":"強力送風機66", "parentId":5, "childId":[], "pics":["https://www.yasuda.com.tw/archive/product_type/thumb/5by35Yqb6YCB6aKo5qmfXzE2MTExODA1MDY0Mg==.jpg", "https://www.yasuda.com.tw/archive/product/original/5bug5oi-6YCa6aKoLOmAmumiqOioreWCmV8xNjA3MjkwMjA4MzU=.jpg"], "details":[
		{"type":"spec", "data":{
			"葉片" : "24",
			"葉數" : "三葉塑鋼",
			"馬達" : "1/2HP F級，6Pole",
			"電壓" : "可依區域，國別訂製",
			"循環水用量" : "50L",
			"出風類型" : "上出風",
			"送風距離" : "≤ 20M",
			"空機重量" : "約80Kg (不計水量)",
			"尺寸" : "110×110×97cm",
		}},
		{"type":"photo", "data":[
			"https://www.yasuda.com.tw/archive/images/M801-1(2).jpg"
		]},
	]},
};
var fnGetParents = function(nID){
	var aryTempParents = [];

	//push itself
	var nTempID = nID;
	aryTempParents.push( {"id":objProducts[nTempID].id, "name":objProducts[nTempID].name, "pics":objProducts[nTempID].pics} );

	//trace
	if( objProducts[nTempID].parentId == 0){
		return aryTempParents;
	}

	while( objProducts[nTempID].parentId != 0 ){
		if( nTempID != nID ){
			aryTempParents.unshift( {"id":objProducts[nTempID].id, "name":objProducts[nTempID].name, "pics":objProducts[nTempID].pics} );
		}

		nTempID = objProducts[nTempID].parentId;
	}
	aryTempParents.unshift( {"id":objProducts[nTempID].id, "name":objProducts[nTempID].name, "pics":objProducts[nTempID].pics} );
	return aryTempParents;
}
var fnGetChilds = function(nID){
	var aryTempChilds = [];

	for( var i=0; i<objProducts[nID].childId.length; i++ ){
		var nChildId = objProducts[nID].childId[i];
		aryTempChilds.push( {"id":nChildId, "name":objProducts[nChildId].name, "pics":objProducts[nChildId].pics} );
	}

	return aryTempChilds;
}
var fnGetObjProduct = function( nID ){
	var objProduct = {};
	
	if( nID == 0 ){
		objProduct.isChild = false;
		objProduct.aryChilds = [];

		for( var key in objProducts ){
			if( objProducts[key].parentId == 0 ){
				objProduct.aryChilds.unshift( {"id":objProducts[key].id, "name":objProducts[key].name, "pics":objProducts[key].pics} );
			}
		}

		return objProduct;
	}

	//package
	objProduct.id = nID;
	objProduct.name = objProducts[nID].name;
	objProduct.pics = objProducts[nID].pics;
	objProduct.details = objProducts[nID].details;
	objProduct.isChild = ( objProducts[nID].childId.length == 0 ) ? true : false;
	objProduct.aryParents = fnGetParents(nID);
	objProduct.aryChilds = fnGetChilds(nID);

	return objProduct;
}

//route
m_app.index = function(req,res){
	res.render( fnGetDeviceName( req ) + '_index', {title:""} );
}
m_app.patent = function(req,res){
	res.render( fnGetDeviceName( req ) + '_patent', {title:"專利"} );
}
m_app.product = function(req,res){
	var nId = parseInt(req.params.id);

	if( req.params.method == null ){
		res.render( fnGetDeviceName( req ) + '_product', {title:"產品", id:nId, products:objProducts} );	
		return;
	}

	//as api
	res.json( fnGetObjProduct(nId) );
}
m_app.download = function(req,res){
	res.render( fnGetDeviceName( req ) + '_download', {title:"下載"} );
}

module.exports = m_app;
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

//route
m_app.index = function(req,res){
	res.render( fnGetDeviceName( req ) + '_index', {title:""} );
}
m_app.patent = function(req,res){
	res.render( fnGetDeviceName( req ) + '_patent', {title:"專利"} );
}
m_app.product = function(req,res){
	var nId = req.params.id;
	res.render( fnGetDeviceName( req ) + '_product', {title:"產品"} );
}

module.exports = m_app;
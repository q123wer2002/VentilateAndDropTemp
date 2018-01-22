'use strict'

//lib
var m_express = require('express');
var m_app = m_express();
var m_cors = require('cors')
var m_bodyParser = require('body-parser');
var m_routePage = require('./route/routepage');
//end lib

//for setting
m_app.use( m_cors() );
m_app.use( '/static', m_express.static('public') );
m_app.use( m_express.static('public') );
m_app.use( m_bodyParser.json() );
m_app.use( m_bodyParser.urlencoded({ extended: false }) );

const m_nPort = 8000;

//templates
m_app.get( '/templates/top', m_routePage.templateTop );
m_app.get( '/templates/footer', m_routePage.templateFooter );

//pages
m_app.get( '/', m_routePage.index );
m_app.get( '/index', m_routePage.index );
m_app.get( '/patent', m_routePage.patent );

m_app.listen(m_nPort, function(){
	console.log('Example app listening on port ' + m_nPort + '!');
});
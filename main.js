var express = require('express');
var app = express();
var consign = require('consign');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

Object.assign(app,{express});
Object.assign(app, {server});
Object.assign(app, {io});


consign()
	.include('./libs/config.js')
	.then('db.js')
	.then('authenticate.js')
	.then('libs/middlewares.js')
	.then('chat/on.js')
	.then('controllers')
	.then('routers')
	.then('libs/boot.js')
	.into(app);
	
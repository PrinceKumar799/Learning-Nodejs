const Router = require('express').Router();
const path = require('path');
const {handleLogin} = require(path.join('..','controllers','authController'));
Router.post('/',handleLogin);

module.exports = Router;
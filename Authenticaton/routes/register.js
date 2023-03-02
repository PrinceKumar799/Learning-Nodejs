const Router = require('express').Router();
const path = require('path');
const {handleNewUser} = require(path.join('..','controllers','registerController'));
Router.post('/',handleNewUser);

module.exports = Router;
const root = require('express').Router();
const path = require('path');

root.use('^/$',(req,res)=> {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})
root.get('/new-page(.html)?',(req,res) => {
    res.sendFile(path.join(__dirname,'..','views','new-page.html'));
})

root.get('/old-page(.html)?',(req,res) => {
    res.redirect(301,'/new-page.html'); //302 by default
})

module.exports = root;
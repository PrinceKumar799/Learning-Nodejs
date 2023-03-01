const root = require('express').Router();
const path = require('path');

root.use('^/$',(req,res)=> {
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})

module.exports = root;
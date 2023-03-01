const Router = require('express').Router();
const path = require('path');
const data = {};
data.employees = require(path.join('..','..','data','employees.json')); 
Router.route('/')
.get((req,res)=>{
    res.json(data.employees);
})
.post((req,res)=>{
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    })
})
.put((req,res)=>{
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    })
})
.delete((req,res)=>{
    res.json({"id": req.body.id});
});

Router.route('/:id')
.get((req,res)=>{
    res.json({"id":req.params.id});
});

module.exports = Router;

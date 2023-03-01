const path = require('path');
const data = {};
data.employees = require(path.join('..','model','employees.json')); 
const getAllEmployees = (req,res)=>{
    res.json(data.employees);
}
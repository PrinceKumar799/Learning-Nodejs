const Router = require('express').Router();
const employeesController = require('../../controllers/employeesController');
const verifyJWT = require('../../middleware/verifyJWT');
Router.route('/')
.get(verifyJWT,employeesController.getAllEmployees)
.post(employeesController.creatEmployee)
.put(employeesController.updateEmployee)
.delete(employeesController.deleteEmployee);

Router.route('/:id')
.get(employeesController.getEmployee);

module.exports = Router;

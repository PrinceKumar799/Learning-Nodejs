const Router = require('express').Router();
const employeesController = require('../../controllers/employeesController');
Router.route('/')
.get(employeesController.getAllEmployees)
.post(employeesController.creatEmployee)
.put(employeesController.updateEmployee)
.delete(employeesController.deleteEmployee);

Router.route('/:id')
.get(employeesController.getEmployee);

module.exports = Router;

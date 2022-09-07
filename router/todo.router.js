const router = require('express').Router()
const todoController = require('../controllers/todo.controller')

router.get('/get/todos',todoController.getTodos)
router.get('/get/todo/:id',todoController.getDetailTodo)
router.post('/add/todo',todoController.addTodo)
router.delete('/delete/todo/:id',todoController.deleteTodo)
router.patch('/update/todo/:id',todoController.updateTodo)
module.exports=router

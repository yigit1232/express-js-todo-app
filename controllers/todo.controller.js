const { get } = require('mongoose')
const Todo = require('../models/todo.model')


const addTodo = async(req,res)=>{
    try{
        const {todo} = req.body
        if(!todo){
            return res.json({error:'All fields are required.'}).status(405)
        }
        const newTodo = new Todo({
            name:todo
        })
        if(newTodo){
            await newTodo.save()
            return res.status(201).json(newTodo)
        }else{
            return res.status(405).json({error:'Unknown error.'})
        }
    }catch(e){
        console.log(e)
    }
}

const updateTodo = async(req,res)=>{
    try{
        const {todo} = req.body
        if(!todo){
            return res.json({error:'All fields are required.'}).status(405)
        }
        const updateTodo = await Todo.findByIdAndUpdate({_id:req.params.id},{name:todo},{new:true})
        if(!todo){
            return res.status(404).json({error:'Todo not found.'}) 
        }else{
            return res.json(updateTodo).status(200)
        }
    }catch(e){
        return res.json({error:'Todo not found.'}).status(404)
    }
}


const deleteTodo = async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete({_id:req.params.id})
        if(!todo){
            return res.status(404).json({error:'Todo not found.'}) 
        }else{
            return res.json({message:'Post deleted'}).status(200)
        }
    }catch(e){
        return res.json({error:'Todo not found.'}).status(404)
    }
}

const getDetailTodo = async(req,res)=>{
    try{
        const getTodo = await Todo.findOne({_id:req.params.id})
        console.log(getTodo)
        if(!getTodo){
            return res.status(404).json({error:'Todo not found.'})
        }else{
           return res.status(200).json(getTodo)
        }
    }catch(e){
        return res.json({error:'Todo not found.'}).status(404)
    }
}

const getTodos = async(req,res)=>{
    try{
        const todos = await Todo.find()
        if(todos.length>0){
            return res.json(todos).status(200)
        }else{
            return res.status(404).json({message:'Todos not found.'})
        }
    }catch(e){
        console.log(e)
    }
}

module.exports={getTodos,addTodo,getDetailTodo,deleteTodo,updateTodo}
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    createdAt:{type:Date,default:Date.now()}
})

const Todo = mongoose.model('Todo',todoSchema)


module.exports=Todo
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(error)=>{
    res.status(400).send(error);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos
    });
  },(error)=>{
    res.status(400).send(error);
  });
});

app.listen(3000,()=>{
  console.log(`Started on 3000`);
});

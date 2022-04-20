const express = require("express");     
const { get } = require("express/lib/response");
const cors=require('cors');   
const { use } = require("express/lib/router");
const app=express()
const port=process.env.PORT || 5000; 

app.get('/',(req,res)=>{
    res.send('hello from my node smarty part ')
})

const users=[
    {id:1,name:'mehedi',email:'mehedi@gmail.com',phone:'0193254366'},
    {id:2,name:'asif',email:'asif@gmail.com',phone:'0193254366'},
    {id:3,name:'faysal',email:'faysal@gmail.com',phone:'0193254366'},
    {id:4,name:'rifat',email:'rifat@gmail.com',phone:'0193254366'},
    {id:5,name:'tanvir',email:'tanvir@gmail.com',phone:'0193254366'},
    {id:6,name:'sabbir',email:'sabbir@gmail.com',phone:'0193254366'},
    {id:7,name:'marium',email:'marium@gmail.com',phone:'0193254366'},
  
]



app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id=parseInt(req.params.id)
    const user=users.find(u =>u.id === id)
    res.send(user)
})


app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});
app.post('/users', (req, res) => {
    console.log('req body', req.body);
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', newUser)
    res.json(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
app.use(cors())
app.use(express.json)
app.listen(port, ()=>{
    console.log('this is node and working it',port)
})
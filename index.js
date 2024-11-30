// importing
const express = require('express')
require("./connection")
var empModel=require("./model/employee")
// initialize
var app= express();
// midd
app.use(express.json());

// api creation

// add
app.post('/add',async(req,res)=>{
    try {
        await empModel(req.body).save()
        res.send({message:"Data Added!!"});
    } catch (error) {
        console.log(error);
    }
})

// view
app.get('/view',async(req,res)=>{
    try {
       const data = await empModel.find()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})
// delete
app.delete("/del/:id",async(req,res)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send("Data deleted");
    } catch (error) {
        console.log(error);
    }
})

// update
app.put('/up/:id',async(req,res)=>{
    try {
       const update= await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("Data Updated!!");
    } catch (error) {
        console.log(error);
    }
})

// port setting
app.listen(3004,()=>{
    console.log("port is running");
});

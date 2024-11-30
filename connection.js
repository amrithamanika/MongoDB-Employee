const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://amrithamanikandan162005:amritha6629@amritha.e10c6.mongodb.net/?retryWrites=true&w=majority&appName=AMRITHA")
  .then(() =>{
    console.log('Connected!')
})
.catch((err)=>{
    console.log(err)
})
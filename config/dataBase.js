const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect =() =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser :true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("dbConnect Succesfully");
    })
    .catch(()=>{
        console.log("dbConnect Un-Succes");
    })
}

module.exports = dbConnect;
const mongoose = require("mongoose");

const Blogs = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        maxLength:50,
    },
    blogData :{
        type:String,
        required:true,
        maxLength:500,
    },
    like :{
        type:Boolean,
        required:false,
        default:false,
    },
    comment:[],
})

module.exports = mongoose.model("blogModel",Blogs);
const Blog = require("../models/blogModel");

exports.createPost =async(req,res)=>{
    try {
    const {heading,blogData} = req.body;
    const posts = Blog.create({heading,blogData});
    res.status(200).json({
        success:true,
        data:posts,
        message:"item got added",
    })
    } catch (error) {
            res.status(500).json({
            success:false,
            message:"error in createPost",
        }) 
    }  
}



exports.fetchPost =async(req,res)=>{
    try {
    const posts = await Blog.find({});
    res.status(200).json({
        success:true,
        data:posts,
        message:"got all items",
    })
    } catch (error) {
            res.status(500).json({
            success:false,
            message:"error in fetchPost",
        }) 
    }  
}
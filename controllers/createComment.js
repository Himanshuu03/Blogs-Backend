const Blog = require("../models/blogModel");

exports.createComments = async (req,res) =>{
    try {
        const id = req.params.id;
        const {commentText} = req.body;
        const comments = await Blog.findByIdAndUpdate({_id:id},{$push :{comment:commentText}});
        res.status(200).json({
            success:true,
            data:comments,
            message:"comment Added",
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error in adding comments",
        }) 
    }
}

exports.fetchAllComments = async (req,res) =>{
    try {
        const id = req.params.id;
        const allComment = await Blog.findById({_id:id},"comment");
        res.status(200).json({
            success:true,
            data:allComment,
            message:"all comment read",
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error in fetching comments",
        }) 
    }
}
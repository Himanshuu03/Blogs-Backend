const Blog = require("../models/blogModel");

exports.likePost = async (req,res) =>{
    try {
        const id = req.params.id;
        const like = true;
        const postLike = await Blog.findByIdAndUpdate({_id:id},{like:like}); 
        res.status(200).json({
            success:true,
            data:postLike,
            message:"item liked",
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error in postLike",
        })
    }
}

exports.unLikePost = async (req,res) =>{
    try {
        const id = req.params.id;
        const like = false
        const postUnLike = await Blog.findByIdAndUpdate({_id:id},{like:like}); 
        res.status(200).json({
            success:true,
            data:postUnLike,
            message:"item Unliked",
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"error in postLike",
        })
    }
}
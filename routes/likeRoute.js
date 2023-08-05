const express = require("express");
const { likePost, unLikePost } = require("../controllers/likePost");
const routes = express.Router();

routes.put("/like/:id",likePost);
routes.put("/unlike/:id",unLikePost);

module.exports = routes;
const express = require("express");
const { createPost, fetchPost } = require("../controllers/createPost");

const routes = express.Router();


routes.post("/create",createPost);
routes.post("/",fetchPost);

module.exports = routes;
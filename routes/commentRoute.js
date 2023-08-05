const express = require("express");
const { fetchAllComments, createComments } = require("../controllers/createComment");
const routes = express.Router();

routes.get("/:id",fetchAllComments);
routes.put("/create/:id",createComments);

module.exports = routes;

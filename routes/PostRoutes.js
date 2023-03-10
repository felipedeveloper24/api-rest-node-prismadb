
const express = require("express");
const PostController = require("../controllers/PostController");

const routerPost = express.Router();

routerPost.post("/create",PostController.createPost);
routerPost.get("/get",PostController.getPosts);


module.exports=routerPost;
import {Router} from "express";
import{getAllPosts, getPostById, createPost, updatePost, deletePost} from "../controllers/post.controller.js";
import {createComment, updateComment, deleteComment} from "../controllers/comment.controller.js"

export const postRoutes = Router();

//ruta para buscar todos los post
postRoutes.get("/posts", getAllPosts);

//ruta para buscar post por id

postRoutes.get("/posts/:postId", getPostById);

//ruta para crear post

postRoutes.post("/posts", createPost);

//actualizar un post 

postRoutes.put("/posts/:postId", updatePost);

//eliminar post
postRoutes.delete("/posts/:postId", deletePost);

//Rutas para los comentarios
export const commentRoutes = Router();
 
//crear comment
commentRoutes.post("/posts/:postId", createComment);

//actualizar comment
commentRoutes.put("/posts/:postId", updateComment);

//eliminar comment
commentRoutes.delete("/posts/:postId", deleteComment);

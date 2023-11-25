import Post from "../models/post.model.js"

//buscar todos los post

export const getAllPosts = async(req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

//buscar un post por Id

export const getPostById = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        res.status(200).json(post);
    } catch (error) {
        return res.json({message:"Error al buscar post"});
    }
};

//crear un post

export const createPost = async (req, res) =>{ 
try {
    const {title, description, autor, imageUrl} = req.body;
    const newPost = new Post({
        title,
        description,
        autor,
        imageUrl
    });
    const postSaved = await newPost.save();
    res.status(201).json(postSaved);
} catch (error) {
    res.status(400).json({message:"Error al crear post"});
}
};

//actualizar un post

export const updatePost = async (req, res) => {
    const { postId } = req.params;
    const post = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(postId, post, {
          new: true,  
        });
        res.status(200).json(updatedPost)
    } catch (error) {
        return res
        .status(404)
        .json({message:"No se pudo actualizar el post"});
    }
};

//eliminar un post

export const deletePost = async (req, res) => {
    const { postId } = req.params;    
    try {
        const deletedPost = await Post.findByIdAndDelete(postId);
        res.status(200).json({message:"Post eliminado"})
    } catch (error) {
        return res
        .status(404)
        .json({message:"No se pudo eliminar el post"});
    }
};
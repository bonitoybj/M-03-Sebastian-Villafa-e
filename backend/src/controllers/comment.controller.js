import Comment from "../models/comment.model.js"

//crear comment

export const createComment = async (req, res) => {
    try {
        const { autor, description } = req.body;
        const newComment = new Comment({
            autor,
            description
        });
        const commentSaved = await newComment.save();
        res.status(201).json(commentSaved);
    } catch (error) {
        
    }

};

//actulizar comment

export const updateComment = async (req, res) => {
    const { commentId } = req.params;
    const comment = req.body; 
    try {
        const updatedComment = await Comment.findByIdAndUpdate(commentId, comment, {
            new: true,
        });
        res.status(200).json(updatedComment)
    } catch (error) {
        res.status(404).json({message:"No se puedo actualizar el comment"});
    }
};

//eliminar comment
export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    try {
        const deleteComment = await Comment.findByIdAndDelete(commentId);
        res.status(200).json({message:"Comment eliminado"});
    } catch (error) {
      res.status(404).json({message:"No se puedo eliminar el comment"});  
    }
};

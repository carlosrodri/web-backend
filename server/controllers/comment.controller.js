const Comment = require('../models/comment.model')
const commentController = {}

commentController.addComment = async (req, res) => {
    console.log(req.body.comment, 'comentario');
    const comment = new Comment(req.body)
    await comment.save();
    res.json({
        status: 'ok',
        message: 'new comment yet ' + comment._id
    }).status(200);
}

commentController.getAllComments = async (req, res) => {
    const comment = await Comment.find()
    if (comment.length > 0) {
        res.json({
            status: 'ok',
            message: 'lista de comentarios',
            comments: comment
        }).status(200)
    } else {
        res.json({
            status: 'error',
            message: 'ha ocurrido un error',
            comments: null
        }).status(204)
    }
}

commentController.getCommentsByArticle = async (req, res) => {
    const comment = await Comment.find({
        articleId: req.params.article_id
    })
    if (comment.length > 0) {
        res.json({
            status: 'ok',
            message: 'lista de comentarios',
            comments: comment
        }).status(200);
    } else {
        res.json({
            status: 'error',
            message: 'ha ocurrido un error, no se encuentra en la base de datos',
        }).status(204)
    }
}

commentController.delete = async (req, res) => {
    await Comment.findByIdAndDelete({
        _id: req.params.id
    });
    res.json({
        status: 'succes',
        message: 'has been deleted'
    })
}

module.exports = commentController
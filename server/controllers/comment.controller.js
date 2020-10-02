const Comment = require('../models/comment.model')
const commentController = {}

commentController.addComment = async(req, res) =>{
    const comment = new Comment(req.body)
    comment.save()
    res.json({
        status: 'ok',
        message: 'new subscriber ' + comment._id
    }).status(200)
}

commentController.getAllComments = async(req, res) =>{
    const comment = await Comment.find()
    if (comment) {
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

commentController.getCommentsByArticle = async(req, res) =>{
    const comment = await Comment.find({
        articleId: req.params.article_id
    })
    if (comment) {
        res.json({
            status: 'ok',
            message: 'lista de suscriptores',
            comments: comment
        }).status(200)
    } else {
        res.json({
            status: 'error',
            message: 'ha ocurrido un error, no se encuentra en la base de datos',
            comments: comment
        }).status(204)
    }
}

module.exports = commentController
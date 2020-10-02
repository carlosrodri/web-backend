const Article = require("../models/article.model");
const articleController = {}

articleController.getArticle = async(req, res) =>{
    const article = await Article.findOne({
        _id: req.params.article_id
    })
    if (article) {
        res.json({
            status: 'ok',
            article: article
        }).status(200)
    } else {
        res.json({
            status: 'error',
            article: null
        }).status(204)
    }
}

articleController.addArticle = async(req, res) =>{
    const article = new Article(req.body)
    await article.save()
    res.json({
        message:'Articulo agregado ' + article._id
    }).status(200)
}

articleController.getAllArticles = async(req, res) =>{
    const article = await Article.find()
    console.log(article);
    if (article) {
        res.json({
            status: 'ok',
            articles: article
        }).status(200)
    } else {
        res.json({
            status: 'error',
            article: null
        }).status(204)
    }
}

module.exports = articleController

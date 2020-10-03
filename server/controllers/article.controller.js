const Article = require("../models/article.model");
const articleController = {}

articleController.getArticle = async (req, res) => {
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

articleController.addArticle = async (req, res) => {
    const article = new Article(req.body)
    await article.save()
    res.json({
        message: 'Articulo agregado ' + article._id
    }).status(200)
}

articleController.getAllArticles = async (req, res) => {
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

articleController.addImgToArticle = async (req, res) => {
    const article = await Article.findOne({
        _id: req.params.id
    })
    console.log(req.body.img, 'imagenes');
    if (article != null) {
        Article.findOneAndUpdate({
            _id: req.params.id
        }, {
            $push: {
                imgs: req.body.img
            }
        }, function (error, success) {
            if (error) {
                console.log(error);
            } else {
                res.json({
                    status: 'ok'
                }).status(200)
            }
        })
    } else {
        res.json({
            status: 'error',
            message: 'Ha ocurrido un error'
        })
    }
}


module.exports = articleController
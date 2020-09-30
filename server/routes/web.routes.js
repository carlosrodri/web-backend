const express = require('express')
const router = express.Router()

const article = require('../controllers/article.controller')

router.get('/article/:article_id', article.getArticle)
router.get('/article/', article.getAllArticles)
router.post('/article', article.addArticle)


export default router
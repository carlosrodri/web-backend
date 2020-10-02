const express = require('express')
const router = express.Router()
const article = require('../controllers/article.controller')
const subscriber = require('../controllers/subscriber.controller')
const comment = require('../controllers/comment.controller')

router.get('/article/:article_id', article.getArticle)
router.get('/article/', article.getAllArticles)
router.post('/article/', article.addArticle)

router.get('/subscriber/', subscriber.getAllSubscriber)
router.get('/subscriber/:subs_id', subscriber.getSubscriberById)
router.post('/subscriber/', subscriber.addSubsciber)

router.get('/comment/', comment.getAllComments)
router.get('/comment/:article_id', comment.getCommentsByArticle)
router.post('/comment/', comment.addComment)

export default router
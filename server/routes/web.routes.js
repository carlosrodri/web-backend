const express = require('express')
const router = express.Router()
const article = require('../controllers/article.controller')
const subscriber = require('../controllers/subscriber.controller')
const comment = require('../controllers/comment.controller')
const visit = require('../controllers/visit.controller')


/**
 * Routes of Articles
 */
router.get('/articles/:article_id', article.getArticle)
router.get('/articles/', article.getAllArticles)
router.post('/articles/', article.addArticle)
router.put('/articles/:id', article.addImgToArticle)


/**
 * Routes of Subscribers
 */
router.get('/subscribers/', subscriber.getAllSubscriber)
router.get('/subscribers/:subs_id', subscriber.getSubscriberById)
router.post('/subscribers/', subscriber.addSubsciber)


/**
 * Routes of Comments
 */
router.get('/comments/', comment.getAllComments)
router.get('/comments/:article_id', comment.getCommentsByArticle)
router.post('/comments/', comment.addComment)


/**
 * Routes of Visits
 */
router.get('/visits/', visit.getAllVisits)
router.get('/visits/:date', visit.getvisitsByDate)
router.post('/visits/', visit.addVisit)

export default router
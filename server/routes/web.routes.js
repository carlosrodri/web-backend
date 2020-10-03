const express = require('express')
const router = express.Router()
const article = require('../controllers/article.controller')
const subscriber = require('../controllers/subscriber.controller')
const comment = require('../controllers/comment.controller')
const visit = require('../controllers/visit.controller')


/**
 * Routes of Articles
 */
router.get('/article/:article_id', article.getArticle)
router.get('/article/', article.getAllArticles)
router.post('/article/', article.addArticle)


/**
 * Routes of Subscribers
 */
router.get('/subscriber/', subscriber.getAllSubscriber)
router.get('/subscriber/:subs_id', subscriber.getSubscriberById)
router.post('/subscriber/', subscriber.addSubsciber)


/**
 * Routes of Comments
 */
router.get('/comment/', comment.getAllComments)
router.get('/comment/:article_id', comment.getCommentsByArticle)
router.post('/comment/', comment.addComment)


/**
 * Routes of Visits
 */
router.get('/visit/', visit.getAllVisits)
router.get('/visit/:date', visit.getvisitsByDate)
router.post('/visit/', visit.addVisit)

export default router
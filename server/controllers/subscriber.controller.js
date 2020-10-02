const Subscriber = require('../models/subscriber.model')
const subscriberController = {}

subscriberController.addSubsciber = async(req, res) =>{
    const subscriber = new Subscriber(req.body)
    subscriber.save()
    res.json({
        status: 'ok',
        message: 'new subscriber ' + subscriber._id
    }).status(200)
}

subscriberController.getAllSubscriber = async(req, res) =>{
    const subscriber = await Subscriber.find()
    if (subscriber) {
        res.json({
            status: 'ok',
            message: 'lista de suscriptores',
            subscribers: subscriber
        }).status(200)
    } else {
        res.json({
            status: 'error',
            message: 'ha ocurrido un error',
            subscribers: null
        }).status(204)
    }
}

subscriberController.getSubscriberById = async(req, res) =>{
    const subscriber = await Subscriber.findOne({
        _id: req.params.subs_id
    })
    if (subscriber) {
        res.json({
            status: 'ok',
            message: 'lista de suscriptores',
            subscribers: subscriber
        }).status(200)
    } else {
        res.json({
            status: 'error',
            message: 'ha ocurrido un error, no se encuentra en la base de datos',
            subscriber: subscriber
        }).status(204)
    }
}

module.exports = subscriberController
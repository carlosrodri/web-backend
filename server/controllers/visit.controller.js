const Visit = require('../models/visit.model')
const visitController = {}

visitController.addVisit = async(req, res) =>{
    const visit = new Visit(req.body)
    visit.save()
    res.json({
        status: 'ok',
        message: 'new visit ' + visit._id
    }).status(200)
}

visitController.getAllVisits = async(req, res) =>{
    const visit = await visit.find()
    if (visit) {
        res.json({
            status: 'ok',
            message: 'lista de visitas',
            visits: visit
        }).status(200)
    } else {
        res.json({
            status: 'error',
            message: 'ha ocurrido un error',
            visits: null
        }).status(204)
    }
}

visitController.getvisitsByDate = async(req, res) =>{
    const visit = await visit.find({
        date: req.params.date
    })
    if (visit) {
        res.json({
            status: 'ok',
            message: 'lista de Visitas por día',
            visits: visit
        }).status(200)
    } else {
        res.json({
            status: 'error',
            message: 'ha ocurrido un error, no se encuentra en la base de datos',
            visits: visit
        }).status(204)
    }
}

module.exports = visitController
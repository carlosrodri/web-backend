import {
    Router
} from "express";

const { mongoose } = require('../database')
const router = Router()

router.get('/', (req, res) => {
    res.send('Bienvenido a mi página web')
})

export default router
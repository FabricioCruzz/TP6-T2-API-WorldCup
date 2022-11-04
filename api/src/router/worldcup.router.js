const express = require('express')
const controller = require('../controller/worldcup.controller')

const router = express.Router()

router.get('/', controller.getAll)
router.get('/:team', controller.getByTeam)
router.get('/date/day/:date', controller.getByDay)
router.get('/date/month/:date', controller.getByMonth)
router.post('/', controller.create)
router.put('/:id', controller.updateMatchScore)
router.delete('/:id', controller.remove)

module.exports = router
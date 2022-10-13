const service = require('../service/worldcup.service')

const create = (req, res) => {
    service.create(req.body)
    res.status(201).send('Match created successfully')
}

const getAll = (req, res) => {
    res.send(service.getAll())
}

const getByTeam = (req, res) => {
    
}

const getByDate = (req, res) => {

}

const update = (req, res) => {

}

const remove = (req, res) => {

}

module.exports = {
    create,
    getAll,
    getByTeam,
    getByDate,
    update,
    remove
}
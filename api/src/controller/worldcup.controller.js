const service = require('../service/worldcup.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Match created successfully')
}

const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
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
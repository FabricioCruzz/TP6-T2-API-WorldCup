const service = require('../service/worldcup.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Match created successfully')
}

const getAll = async (req, res) => {
    const response = await service.getAll()
    res.send(response)
}

const getByTeam = async (req, res) => { 
    const team = req.params.team
    res.send(await service.getByTeam(team))
}

const getByDay = async (req, res) => {
    const matchDay = req.params.date
    res.send(await service.getByDay(matchDay))
}

const getByMonth = async (req, res) => {
    const matchMonth = req.params.date
    res.send(await service.getByMonth(matchMonth))
}

const updateMatchScore = async (req, res) => {
    const matchId = parseInt(req.params.id, 10)
    await service.updateMatchScore(matchId, req.body)
    res.status(200).send('Match score updated successfully!')
}

const remove = async (req, res) => {
    const matchId = req.params.id
    await service.remove(matchId)
    res.status(204).send('')
}

module.exports = {
    create,
    getAll,
    getByTeam,
    getByDay,
    getByMonth,
    updateMatchScore,
    remove
}
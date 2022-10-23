const { match } = require('../model/index')

const create = async data => {
    await match.create(data)
}

const getAll = async () => {
    return await match.findAll()
}

const getByTeam = team => {

}

const getByDate = date => {

}

const update = (matchId, match) => {

}

const remove = matchId => {

}

module.exports = {
    create,
    getAll,
    getByTeam,
    getByDate,
    update,
    remove
}
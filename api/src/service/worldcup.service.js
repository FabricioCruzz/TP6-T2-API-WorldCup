const { match, sequelize } = require('../model/index')
const { Op } = require('sequelize')

const create = async data => {
    await match.create(data)
}

const getAll = async () => {
    return await match.findAll()
}

const getByTeam = async team => {
    return await match.findAll({
        where: {
            [Op.or]: [
                { home: team },
                { visitor: team }
            ]
        }
    })
}

const getByDate = async date => {   
    return await match.findAll({
        where:
            sequelize.literal(`extract(day from match_date) = ${date}`)
      })

}

const updateMatchScore = async (matchId, data) => {
    return await match.update(data, {
        where: {
            id: matchId
        }
    })
}

const remove = async matchId => {
    return await match.destroy({
        where: {
            id: matchId
        }
    })
}

module.exports = {
    create,
    getAll,
    getByTeam,
    getByDate,
    updateMatchScore,
    remove
}
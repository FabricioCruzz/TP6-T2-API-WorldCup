const { match, sequelize } = require('../model/index')
const { Op } = require('sequelize')

const create = async data => {
    await match.create(data)
}

const getAll = async () => {
    return await match.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
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

const getByDay = async day => {   
    return await match.findAll({
        where:
            sequelize.literal(`extract(day from match_date) = ${day}`)
      })

}

const getByMonth = async month => {   
    return await match.findAll({
        where:
            sequelize.literal(`extract(month from match_date) = ${month}`)
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
    getByDay,
    getByMonth,
    updateMatchScore,
    remove
}
module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('match', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        home: DataTypes.STRING,
        visitor: DataTypes.STRING,
        score_home: DataTypes.INTEGER,
        score_visitor: DataTypes.INTEGER,
        match_date: DataTypes.DATE
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Match
}
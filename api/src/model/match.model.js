module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('match', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        home: DataTypes.STRING,
        visitor: DataTypes.STRING,
        date: DataTypes.DATE
    }, {
        timestamps: false,
        freezeTableName: true
    })

    return Match
}
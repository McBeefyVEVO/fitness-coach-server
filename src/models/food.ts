module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "food",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            calories: {
                type: Sequelize.SMALLINT,
                allowNull: false,
            },
            carbs: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            fats: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            proteins: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            sugars: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            salts: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            weight: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            imagePath: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            





            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        }
    )
}
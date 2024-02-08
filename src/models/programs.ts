module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "programs",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                AllowNull: false,
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
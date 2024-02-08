module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "user_achievements",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            achievement_id: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.UUID,
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
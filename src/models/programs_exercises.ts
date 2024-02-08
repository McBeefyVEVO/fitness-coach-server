module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "programs_exercises",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            programs_id: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            exercises_id: {
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
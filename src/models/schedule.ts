module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "schedule",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            scheduletable: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            user_id:  {
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
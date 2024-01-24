module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "useraccountroles",
        {
            userid: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            accountroleid: {
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
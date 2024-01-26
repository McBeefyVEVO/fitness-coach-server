module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "accountrole",
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
                
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
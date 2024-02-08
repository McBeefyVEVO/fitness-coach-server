module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "exercises",
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
            video: {
                type: Sequelize.STRING,
                AllowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                AllowNull: false,
            },
            small_desc: {
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
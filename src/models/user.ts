module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "user",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            passwordHash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            verified: {
                type: Sequelize.BOOLEAN,
                defaultValue: 0,
            },
            date_of_birth: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            weight: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            height: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            date_of_reg: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            bannerPath: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profilePicPath: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            stats: {
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
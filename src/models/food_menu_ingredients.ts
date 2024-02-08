module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "food_menu_ingredients",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            food_id: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            ingredient_id: {
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
"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("categories_exercises_records", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        exercises_id: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        categories_exercises_id: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    });
};

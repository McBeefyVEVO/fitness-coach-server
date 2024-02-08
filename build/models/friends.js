"use strict";
module.exports = (sequelize, Sequelize) => {
    return sequelize.define("friends", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        firstuser: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        seconduser: {
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

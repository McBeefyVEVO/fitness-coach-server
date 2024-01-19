"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(db_1.dbconfig.DB, db_1.dbconfig.USER, db_1.dbconfig.PASSWORD, {
    host: db_1.dbconfig.HOST,
    port: db_1.dbconfig.PORT,
    dialect: db_1.dbconfig.dialect,
    pool: {
        acquire: db_1.dbconfig.pool.acquire,
        idle: db_1.dbconfig.pool.idle,
        max: db_1.dbconfig.pool.max,
        min: db_1.dbconfig.pool.min
    },
});
let db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize,
    users: require("./user")(sequelize, sequelize_1.Sequelize)
};
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
db.users = require("./user")(sequelize, sequelize_1.Sequelize);
exports.default = db;

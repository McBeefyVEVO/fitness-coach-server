import {dbconfig} from "../config/db";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD,{
    host: dbconfig.HOST,
    port: dbconfig.PORT,
    dialect: dbconfig.dialect,
    pool: {
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle,
        max: dbconfig.pool.max,
        min: dbconfig.pool.min 
    },

});

let db = {
    Sequelize,
    sequelize,
    users: require("./user")(sequelize, Sequelize)
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require("./user")(sequelize, Sequelize)

export default db;
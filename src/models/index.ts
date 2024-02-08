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
    users: require("./user")(sequelize, Sequelize),
    accountRoles: require("./accountrole")(sequelize, Sequelize),
    userAccountRoles: require("./useraccountroles")(sequelize, Sequelize),
    achievements: require("./achievements")(sequelize, Sequelize),
    categories_exercises_records: require("./categories_exercises_records")(sequelize, Sequelize),
    categories_exercises: require("./categories_exercises")(sequelize, Sequelize),
    exercises: require("./exercises")(sequelize, Sequelize),
    meals_food: require("./meals_food")(sequelize, Sequelize),
    meals: require("./meals")(sequelize, Sequelize),
    friends: require("./friends")(sequelize, Sequelize),
    food: require("./food")(sequelize, Sequelize),
    programs_exercises: require("./programs_exercises")(sequelize, Sequelize),
    programs: require("./programs")(sequelize, Sequelize),
    schedule: require("./schedule")(sequelize, Sequelize),
    user_achievements: require("./user_achievements")(sequelize, Sequelize),
};

db.users.belongsToMany(db.accountRoles,{ through: db.userAccountRoles, as: "userRole" });
db.accountRoles.belongsToMany(db.users,{ through: db.userAccountRoles, as: "user" });

/*
db.userAccountRoles.belongsTo(db.users, {
    foreignKey: "userid",
    onDelete: "cascade"
})

db.userAccountRoles.belongsTo(db.accountRoles, {
    foreignKey: "accountroleid",
    onDelete: "cascade"
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require("./user")(sequelize, Sequelize)

*/
export default db;
const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
const config = require('../config/database.config'); 

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
        dialectModule: mysql2,
        port: 3306,
        operatorsAliases: 'false',
        logging: false,
        benchmark: true,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

module.exports = sequelize
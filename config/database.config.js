module.exports = { 
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "mysql2",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
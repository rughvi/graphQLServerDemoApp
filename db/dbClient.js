const { Client } = require('pg');
const env = require('../env.js');

env.get();
console.log(process.env.POSTGRES_DB_HOST);
console.log(process.env.POSTGRES_DB_USERNAME);
console.log(process.env.POSTGRES_DB_PASSWORD);
console.log(process.env.POSTGRES_DB_DATABASE);

const dbClient = new Client({
    host: process.env.POSTGRES_DB_HOST,
    user: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_DATABASE,
    port: process.env.POSTGRES_DB_PORT
});

module.exports = {
    dbClient
};

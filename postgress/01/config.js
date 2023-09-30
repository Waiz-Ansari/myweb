const { Pool } = require('pg');

const pool = new Pool({
    user: "docker",
    host: "localhost",
    database: "test_db",
    password: "docker",
    port: 7778
}) 
module.exports = pool
const { Pool } = require('pg');

const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'svc_bitmexbitmex',
    password: 'bitmex123456',
    database: 'database_bitmex'
})

module.exports = pool;
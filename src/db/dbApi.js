
const { Pool } = require('pg')
var config = require('../config.js').get(process.env.NODE_ENV);

/* const pool = new Pool({
    user: 'nupsmafjrohwkq',
    host: 'ec2-54-163-253-94.compute-1.amazonaws.com',
    database: 'd3lqc0ad8csf0n',
    password: 'c016782212e9240c7bd1b58aa2a9ff84d7b228608035468dd7a7974988859759',
    port: 5432,
    ssl: true
})
 */
/* 
const pool = new Pool({
    user: 'sandesh',
    host: 'localhost',
    database: 'matrimonial',
    password: 'sandesh',
    port: 5432,
}) */

const pool = new Pool(config.database);

var query = function (text, params, callback) {
    return pool.query(text, params, callback)
}


module.exports.query = query;
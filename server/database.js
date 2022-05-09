const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'10.109.178.47',
    database:'huspacecorp',
    user:'huspacecorp',
    password:'huspacecorp'
})

module.exports = connection;

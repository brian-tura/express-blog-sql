const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zerg4life',
    database: 'db_blog'
});

connection.connect((err) => {
    if(err) {
        console.log(err)
    };
    console.log('Connected to MySQL')
});

module.exports = connection;
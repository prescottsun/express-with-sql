const pgp = require('pg-promise') ({
    query: function(e) {
        console.log('QUERY:', e.query);
    }
});

const options = {
    host: 'localhost',
    database: 'exampleDB',
    user: 'prescottsun',
    password: 'password'
};

const db = pgp(options);

module.exports = db;
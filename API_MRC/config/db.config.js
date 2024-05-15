const mysql = require('mysql');


var connection = mysql.createPool({
  host: '35.232.56.51',
  user: 'whiteboxqa',
  password: 'Innovapath1',
  database: 'login'
});

module.exports = connection;





  
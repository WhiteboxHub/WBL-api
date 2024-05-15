
const sql = require('../config/db.config.js');

module.exports = (callback) => {

    sql.query('SELECT * FROM login.login_details', (err, res) => {
    
      if (err) {
        console.log("error: ", err);
        callback(err, null);
        return;
      }
      callback(null, res);

    });
  
  };
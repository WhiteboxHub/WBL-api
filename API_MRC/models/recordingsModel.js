
const sql = require('../config/db.config.js');

const Recording = {
  getRecordings: (batchname, callback) => {

    const query = "SELECT * FROM whiteboxqa.recording WHERE batchname = ?";
    const params = `${batchname}`; 

    sql.query(query, params , (err, res) => {
      if (err) {
        console.log("Error: ", err);
        callback(err, null);
        return;
      }
      callback(null, res);
    });
  }
};

module.exports = Recording;

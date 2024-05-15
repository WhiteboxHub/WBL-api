
const Recording = require('../models/recordingsModel');

exports.getRecordingsByBatchname = (req, res) => {
  let batchname = req.params.batchname; // Assuming batchname is passed as a parameter in the route
  batchname = batchname.replace(':','');  //removeing : from date
  Recording.getRecordings(batchname, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving recordings."
      });
    } else {
      console.log("Recordings retrieved successfully:", data);
      res.send(data);
    }
  });
};

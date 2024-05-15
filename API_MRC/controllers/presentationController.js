
const presentation = require('../models/presentationModel');

// Handle GET request for '/presentation'
exports.getPresentation = (req, res) => {
  presentation((err, data) => {
    if (err) {
      console.error("Error fetching presentation data:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(data); // Assuming presentationModel sends back JSON data
  });
};

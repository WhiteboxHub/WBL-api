
const express = require('express');
const bodyParser = require('body-parser');
const Routes= require('./routes/router');

const app = express();


//api for resources localhost
app.use('/', Routes);


//api for presentation
app.use('/presentation', Routes)


//api to fetch recordings by batchname
app.use('/recordings/:batchname' ,Routes)



// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

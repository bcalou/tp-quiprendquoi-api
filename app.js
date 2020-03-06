const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const partyRoutes = require('./routes/party');

mongoose.connect('mongodb://localhost/qpq', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/party', partyRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

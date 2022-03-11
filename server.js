const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes')(app, fs);

const server = app.listen(3001, () => {
    console.log('...Starting server at port 3001', server.address().port);
})
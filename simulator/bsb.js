const express = require('express');
const fs = require('fs');
const app = express();

var digitalOceanController = require('./digital-ocean.js');

app.use('/digital-ocean', digitalOceanController);

app.listen(10001, () => console.log('BSB Simulator Listening on localhost:10001'));
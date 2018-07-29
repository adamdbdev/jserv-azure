const express = require('express');
const jsonServer = require('json-server');

const app = express();

app.use('/api', jsonServer.router('db.json'));

server.listen(3000);

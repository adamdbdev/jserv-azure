const express = require('express');
const jsonServer = require('json-server');

const app = express();

app.use((req, res, next) => {
  console.log('REQUEST: ', req)
  next()
})

app.use('/api', jsonServer.router(path.join(__dirname, '..', 'server', 'db.json')))

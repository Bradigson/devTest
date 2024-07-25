const express = require('express');
const allBitMex = require('../controllers/bitmex.controller');

const routers = express.Router();

routers
.get('/bitmex', allBitMex.getBitMex)
.get('/bitmex/:param', allBitMex.filterBitMex)
.get('/websocket', allBitMex.ws)
.post('/insert_bitmex', allBitMex.insertIntoDataBase)
.get('/read_bitmex', allBitMex.readBitMexFormDataBase)

module.exports = routers;
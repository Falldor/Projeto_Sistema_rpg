require('dotenv').config({path:'variaveis.env'}); //ler o arquivo .env
const express = require('express');
const cors = require('cors'); // permite acesso a recursos de outros sites(?)
const routes = require('./routes');
const server = express();

server.use(cors());
server.use(express.json())
server.use(express.urlencoded({extended:true}));
server.use('/api',routes);

server.listen(process.env.PORT, () => {
    console.log(`servidor rodando em http://localhost:${process.env.port}`);
});3
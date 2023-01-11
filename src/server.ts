import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'

import {mongoConect} from '../src/database/mongoConnection'

dotenv.config();
const server = express();
mongoConect();

server.use(cors());
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({extended:true}));


server.use((req, res)=>{
    res.status(404).json({error: 'Page not found'});
});

server.listen(process.env.PORT);
import express from "express";
import router from "./network.js";
import { mysqlService } from '../config.js';

const app = express()

app.use(express.json());

app.use('/', router);

app.listen(mysqlService.port, () => {
    console.log(`MySQL Service running on port ${mysqlService.port}`)
});
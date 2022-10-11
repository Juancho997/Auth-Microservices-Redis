import express from "express";
import router from "./network.js";
import { cacheService } from '../config.js';

const app = express()

app.use(express.json());

app.use('/', router);

app.listen(cacheService.port, () => {
    console.log(`Redis Service running on port ${cacheService.port}`)
});
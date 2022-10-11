import { Router } from 'express';

import { success } from '../../../network/response.js';
import Controller from './index.js';

const router = Router();

router.get('/', list);



function list(req, res, next){
    Controller.list()
    .then(data => {
        success(req, res, data, 200);
    })
    .catch(next);
}





export default router;
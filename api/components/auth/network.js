import { response, Router } from 'express';

import { success, error } from '../../../network/response.js';
import Controller from './index.js';

const router = Router();

router.post('/login', (req, res) => {
    Controller.login(req.body.username, req.body.password)
        .then(token => {
            success(req, res, token, 200)
        })
        .catch(err => {
            error(req, res, 'Invalid data', 400);
        })
})

export default router;
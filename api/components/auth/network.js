import { Router } from 'express';

import { success } from '../../../network/response.js';
import Controller from './index.js';

const router = Router();

router.post('/login', (req, res, next) => {
    Controller.login(req.body.username, req.body.password)
        .then(token => {
            success(req, res, token, 200)
        })
        .catch(next);
});

export default router;
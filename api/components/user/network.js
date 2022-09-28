import { Router } from 'express';

import { success, error } from '../../../network/response.js';
import Controller from './index.js';

const router = Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

function list(req, res) {
    Controller.list()
        .then((list) => {
            success(req, res, list, 200);
        })
        .catch((err) => {
            error(req, res, err.message, 500);
        });
};

function get(req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            success(req, res, user, 200);
        })
        .catch((err) => {
            error(req, res, err.message, 500);
        });
};

function upsert(req, res) {
    Controller.upsert(req.body)
        .then((user) => {
            success(req, res, user, 201);
        })
        .catch((err) => {
            error(req, res, err.message, 500);
        });
};

export default router;
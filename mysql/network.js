import { Router } from 'express';

import { success } from '../network/response.js'
import store from '../store/mysql.js';

const router = Router();

router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.put('/:table', update);

store.handleConnection();

async function list(req, res, next){
    const data =  await store.list(req.params.table)
    success(req, res, data, 200);
};

async function get(req, res, next){
    const data =  await store.get(req.params.table, req.params.id)
    success(req, res, data, 200);
};


async function insert(req, res, next){
    const data =  await store.insert(req.params.table, req.body)
    success(req, res, data, 200);
};


async function update(req, res, next){
    const data =  await store.update(req.params.table, req.body)
    success(req, res, data, 200);
};


export default router;
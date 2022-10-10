import { response, Router } from 'express';
import { checkAuth as secure } from './secure.js';
import { success } from '../../../network/response.js';
import Controller from './index.js';

const router = Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', insert);
router.put('/', secure('update'), update);
router.post('/follow/:id', secure('follow'), follow);
router.get('/followers', followers);

function list(req, res, next) {
    Controller.list()
        .then((list) => {
            success(req, res, list, 200);
        })
        .catch(next);
};

function get(req, res, next) {
    Controller.get(req.params.id)
        .then((user) => {
            success(req, res, user, 200);
        })
        .catch(next);
};

function insert(req, res, next) {
    Controller.insert(req.body)
        .then((user) => {
            success(req, res, user, 201);
        })
        .catch(next);
};

function update(req, res, next) {
    Controller.update(req.body)
        .then((user) => {
            success(req, res, user, 201);
        })
        .catch(next);
};

function follow(req, res, next){
    Controller.follow(req.user.id, req.params.id)
    .then((data) => {
        success(req, res, data, 201);
    })
    .catch(next);
};

function followers(req, res, next){
    Controller.followers(req.params.id)
    .then((data) => {
        success(req, res, data, 201);
    })
    .catch(next);
}

export default router;
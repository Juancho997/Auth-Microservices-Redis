import { success, error } from './response.js';

export default function errors(err, req, res, next){
    console.error('[error]', err);

    const message = err.message || 'Internal Error';
    const status = err.statusCode || 500;

    error(req, res, message, status);
};
import { check } from "../../../auth/index.js";

export function checkAuth(action) {


    function middleware(req, res, next) { 
        switch(action){
            case 'update':
            const owner = req.body.id;
            check.own(req,owner);
            next();
            break;

            
            case 'follow':
            check.logged(req);
            next();
            break;

        default:
            next();
        }
    }

    return middleware;
}
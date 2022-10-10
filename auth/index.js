import jwt from 'jsonwebtoken';
import { jwtAuth } from '../config.js';
import err from '../utils/error.js';

function verify(token){
    return jwt.verify(token, jwtAuth.secret)
};


function getToken(auth){
    if(!auth){
        throw new err('Token not provided', 403)
    }

    if(auth.indexOf('Bearer ') === -1){
        throw new err('Invalid format', 406)
    };

    let token = auth.replace('Bearer', '');
    return token.trim();
};

function decodeHeader(req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    
    return decoded;
};


export function sign(data){
    try{
        return jwt.sign(data, jwtAuth.secret)
    } catch(error){
        throw new err(error.message, 500)
    }
};


export const check = {
    own: function(req, owner){
        const decoded = decodeHeader(req);
        console.log(decoded,'decoded');

        if(decoded.id !== owner){
            throw new err('Unauthorized action', 401);
        }
    },

    logged: function(req, owner){
        const decoded = decodeHeader(req);
    }
};
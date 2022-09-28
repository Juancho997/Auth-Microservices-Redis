import jwt from 'jsonwebtoken'

export function sign(data){
    return jwt.sign(data, 'secret')
};
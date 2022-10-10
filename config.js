export const api = {
    port: process.env.API_PORT || 3000
};

export const jwtAuth = {
    secret : process.env.JWT_SECRET || 'secret' 
};

export const mysqlConfig = {
    host : process.env.MYSQL_HOST ||  'remotemysql.com',
    user : process.env.MYSQL_USER ||  '6XbeeKUJen',
    password : process.env.MYSQL_PASS ||  '3QF7r4Au2x',
    database : process.env.MYSQL_DB ||  '6XbeeKUJen',

};
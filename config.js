export const api = {
    port: process.env.API_PORT || 3000
};

export const post_service = {
    port: process.env.POST_PORT || 3002
};

export const jwtAuth = {
    secret: process.env.JWT_SECRET || 'secret'
};

export const mysqlConfig = {
    host: process.env.MYSQL_HOST || '',
    user: process.env.MYSQL_USER || '6XbeeKUJen',
    password: process.env.MYSQL_PASS || '3QF7r4Au2x',
    database: process.env.MYSQL_DB || '6XbeeKUJen',

};

export const mysqlService = {
    host : process.env.MYSQL_SRV_HOST || 'localhost',
    port : process.env.MYSQL_SRV_PORT || 3001
};

export const remoteDB = process.env.REMOTE_DB || false;
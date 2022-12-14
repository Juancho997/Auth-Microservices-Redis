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
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001
};

export const cacheService = {
    host: process.env.CACHE_SRV_HOST || 'localhost',
    port: process.env.CACHE_SRV_PORT || 3003
};

export const redisConfig = {
    user : 'default',
    host: process.env.REDIS_HOST || 'redis-12632.c16.us-east-1-2.ec2.cloud.redislabs.com',
    port: process.env.REDIS_PORT || '12632',
    password: process.env.REDIS_PASSWORD || 'geaXTGgXTgWW2U8RgYrSwg91jOHOqEf0'
};

export const remoteDB = process.env.REMOTE_DB || false;
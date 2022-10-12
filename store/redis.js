import redis from 'redis';
import { redisConfig, cacheService } from '../config.js';



const client = redis.createClient({
  url: `redis://${redisConfig.user}:${redisConfig.password}@${redisConfig.host}:${redisConfig.port}`
});

(async () => {
  await client.connect();
  console.log('Connected to REDIS');
})();

export default {
  async list(table) {
    const value = await client.get(table);
    return JSON.parse(value);
  },

  async get(table, id) {
    const value = await client.get(`${table}_${id}`);
    return JSON.parse(value);
  },

  async upsert(table, data) {
    let key = table;
    if (data && data.id) {
      key += '_' + data.id;
    }
    await client.set(key, JSON.stringify(data));
    return true;
  }
};




// const client = redis.createClient({
//     host: redisConfig.host,
//     port: redisConfig.port,
//     password: redisConfig.password
// });


// const actions = {

//     list(table) {
//         return new Promise((resolve, reject) => {
//             client.get(table, (err, data) => {
//                 if (err) return reject(err);

//                 let res = data || null;
//                 if (data) {
//                     res = JSON.stringify(data);
//                 };

//                 resolve(res);
//             });
//         })
//     },

//     get(table, id) {

//     },

//     async update(table, data) {
//         let key = table;
//         if(data && data.id){
//             key = `${key}_${data.id}`;
//         };

//         client.setex(key, 10, JSON.stringify(data));
//         return true;
//     }

// }





// export default actions;
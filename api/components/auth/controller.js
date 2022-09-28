import bcrypt from 'bcrypt';
import { sign } from '../../../auth/index.js';


const TABLE = 'auth';

export default function (injectedStore) {
    let store = injectedStore;

    if (!store) {
        store = require('../../../store/dummy.js').default;
    };

    async function login(username, password) {
        const data = await store.query(TABLE, { username });

        return bcrypt.compare(password, data.password)
            .then(samePassword => {
                if (samePassword === true) {
                    return sign(data);
                } else {
                    throw new Error('Invalid data');
                };
            });
                
    };


    async function upsert(data) {
        const authData = {
            id: data.id
        }


        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.upsert(TABLE, authData);
    }

    return {
        upsert,
        login
    };
}
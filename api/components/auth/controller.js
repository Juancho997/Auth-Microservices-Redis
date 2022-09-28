import {sign} from '../../../auth/index.js';
const TABLE = 'auth';

export default function (injectedStore) {
    let store = injectedStore;

    if (!store) {
        store = require('../../../store/dummy.js').default;
    };

    async function login(username, password) {
        const data = await store.query(TABLE, { username });
        if (data.password === password){
            return sign(data);
        } else {
            throw new Error('Invalid data');
        };       

    };


    function upsert(data) {
        const authData = {
            id: data.id
        }


        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = data.password;
        }

        return store.upsert(TABLE, authData);
    }

    return {
        upsert,
        login
    };
}
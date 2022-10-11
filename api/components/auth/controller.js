import bcrypt from 'bcryptjs';
import { sign } from '../../../auth/index.js';


const TABLE = 'auth';

export default function (injectedStore) {
    
    injectedStore.handleConnection();
    
    async function login(username, password) {
        const data = await injectedStore.query(TABLE, { username });

        return bcrypt.compare(password, data.password)
            .then(samePassword => {
                if (samePassword === true) {
                    return sign(data);
                } else {
                    throw new Error('Invalid data');
                };
            });                
    };


    async function insert(data) {
        const authData = {
            id: data.id
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return injectedStore.insert(TABLE, authData);
    }

    return {
        insert,
        login
    };
}
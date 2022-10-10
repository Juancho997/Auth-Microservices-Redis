import { nanoid } from 'nanoid';
import auth from '../auth/index.js';

const TABLE = 'user';

export default function (injectedStore) {

    injectedStore.handleConnection();

    function list() {
        return injectedStore.list(TABLE);
    };

    function get(id) {
        return injectedStore.get(TABLE, id);
    };

    async function insert(body) {
        const user = {
            name: body.name,
            username: body.username
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        if (body.password || body.username) {
            await auth.insert({
                id: user.id,
                username: user.username,
                password: body.password
            })
        }
        return injectedStore.insert(TABLE, user);
    };

    async function update(body){
        const user = {
            name: body.name,
            username: body.username
        };
        return injectedStore.update(TABLE, user)
    };

    function follow(from, to){
        return injectedStore.insert(TABLE + '_follow', {
            user_from : from,
            user_to : to
        });
    };

    function followers(user){
        const join = {};
        join[TABLE] = 'user_to';
        const query = {  user_from : user};

        return injectedStore.query(TABLE + '_follow', query, join)
    }


    return {
        list,
        get,
        insert,
        update,
        follow,
        followers
    }
};
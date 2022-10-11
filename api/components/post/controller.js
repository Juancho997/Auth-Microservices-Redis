const TABLE = 'post';

export default function (injectedStore) {

    injectedStore.handleConnection();

    function list() {
        return injectedStore.list(TABLE);
    };


    return {
        list,
    }
}
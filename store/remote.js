import request from 'request';

export default function createRemote(host, port) {
    const URL = `http://${host}:${port}`;

    function list(table) {
        return req('GET', table);
    };

    // function get(table, id) {

    // };

    // function insert(table, data) {

    // };

    // function update(table, data) {

    // };

    // function query(table, query, join) {

    // };

    function req(method, table, data) {
        let url = `${URL}/${table}`;
        let body = '';

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type': 'application/json'
                },
                url,
                body
            }, (err, req, body) => {
                if (err) {
                    console.error(`There was an error with the remote DB > ${err}`);
                    return reject(err.message);
                }
                const resp = JSON.parse(body);
                return resolve(resp.body);
            }

            )

        })
    };

    return {
        list
    };
};
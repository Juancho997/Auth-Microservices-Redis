import mysql from 'mysql';
import { mysqlConfig } from '../config.js';

const dbconf = {
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database
};


let connection;

function handleConnection() {
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if (err) {
            console.error('[db error]', err);
            setTimeout(handleConnection, 2000);
        } else {
            console.log('DB Connected');
        }
    });

    connection.on('error', err => {
        console.error('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    });
};

const store = {

    handleConnection,

    list(table) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${table}`, (err, data) => {
                if (err) return reject(err);

                resolve(data);
            })
        });
    },


    get(table, id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${table} WHERE id = '${id}'`, (err, data) => {
                if (err) return reject(err);

                resolve(data);
            })
        });
    },

    insert(table, data) {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
                if (err) return reject(err);

                resolve(result);
            })
        });
    },


    update(table, data) {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE ${table} SET WHERE ? id=?`, [data, data.id], (err, result) => {
                if (err) return reject(err);

                resolve(result);
            })
        });
    },

    query(table, query, join) {
        let joinQuery = '';

        if(join){
            const key = Object.keys(join)[0];
            const val = join[key];
            joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
        };


        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
                if (err) return reject(err);
                let responseObject = res.map((result, index) => {
                    return Object.assign({}, result);
                });
                resolve(responseObject[0] || null);
            })
        });

    }





    // upsert(table,data){
    //     return insert(table,data);
    // },


};


export default store;
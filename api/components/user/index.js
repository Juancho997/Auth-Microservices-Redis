import store from '../../../store/mysql.js'; 
import remote from '../../../store/remote-mysql.js';
import ctrl from './controller.js';
import { remoteDB } from '../../../config.js';

let injectedStore;

if( remoteDB === true ) {
    injectedStore = remote;
} else {
    injectedStore = store;
}

// en este caso, estamos consumiendo el microservicio de DB a través del constructor remoto.
// de esta forma, la API se mantiene separada de la BD y puede consumir cualquiera, no conoce de sus métodos y el microservicio puede
// ser mantenido de manera autónoma.

// podemos usar la variable de entorno correspondiente para pegarle al remote o a la BD

export default ctrl(injectedStore);
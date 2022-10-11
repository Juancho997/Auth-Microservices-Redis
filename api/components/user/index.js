// import store from '../../../store/mysql.js'; 
import store from '../../../store/remote-mysql.js'; 
import ctrl from './controller.js';

// en este caso, estamos consumiendo el microservicio de DB a través del constructor remoto.
// de esta forma, la API se mantiene separada de la BD y puede consumir cualquiera, no conoce de sus métodos y el microservicio puede
// ser mantenido de manera autónoma.

export default ctrl(store);
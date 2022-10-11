import createRemote from "./remote.js";
import { mysqlService } from "../config.js";

const remote = new createRemote(mysqlService.host, mysqlService.port);

export default remote;
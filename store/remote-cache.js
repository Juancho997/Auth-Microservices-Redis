import createRemote from "./remote.js";
import { cacheService } from "../config.js";

const remote = new createRemote(cacheService.host, cacheService.port);

export default remote;
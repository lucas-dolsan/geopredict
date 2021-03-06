import express from "express";
import serverConfig from "./serverConfig";
import resources from "../../resources";
import { Route } from "../../resources/resource";
import cors from "cors";

// interface serverServiceInterface {
//     // listen()
// }
// class ServerServiceExpressAdapter {
//     constructor() {
//         this.httpServerInstance = null;
//     }
// }

function init() {
    const httpServer = express();

    httpServer.use(cors());
    httpServer.use(express.json());

    resources.forEach(({ url, method, handler }: Route) => {
        console.log({ url, method });
        httpServer[method](url, handler);
    });

    httpServer.listen(serverConfig.port, () => {
        console.log(`api running at port: ${serverConfig.port}`);
    });
}

const serverService = {
    init,
};

export default serverService;

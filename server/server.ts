import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { IndexRoute } from "./routes/indexRoute";

class Server {
    private app: express.Express;
    constructor() {
        this.app = express();

        this.setStaticRoutes();
        this.setRoutes();
    }

    private setRoutes () {
        const router: express.Router = express.Router();
        router.use(IndexRoute.routes('/'));
        this.app.use(router);
    }
    private setStaticRoutes() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(express.static(path.join(__dirname, '../dist')));
    }
    public static bootstrap (): Server {
        return new Server();
    }
    startServer () {
        this.app.listen(3000, () => {
            console.log("App is working on port: 3000");
        })
    }
}

export default Server;
import { Router, Response, Request, NextFunction} from 'express';
import * as path from "path";

export class IndexRoute {
    private favouriteItems: number[] = [];
    public index (req: Request, res: Response) {
        return res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
    }
    public login (req: Request, res: Response): Response {
        if (req.body.data.login === 'admin' && req.body.data.psswd === 'admin') {
            return res.json(req.body.data);
        }
    }
    public favouriteAdd (req: Request, res: Response) {
        this.favouriteItems.push(req.body.data);
        return res.json({favourite: this.favouriteItems});
    }
    public favouriteRemove (req: Request, res: Response) {
        const newFavouriteArray = this.favouriteItems.filter(item => item !== req.body.data);
        return res.json({favourite: newFavouriteArray});
    }
    public loadFavourite (req: Request, res: Response) {
        return res.json({favourite: this.favouriteItems})
    }
    public static routes (prefix: string): Router {
        let router: Router = Router();
        let indexRoute: IndexRoute = new IndexRoute();
        router.post('/login', indexRoute.login.bind(indexRoute));
        router.post('/favourite/:id', indexRoute.favouriteAdd.bind(indexRoute));
        router.post('/favourite/remove/:id', indexRoute.favouriteRemove.bind(indexRoute));
        router.get('/favourite', indexRoute.loadFavourite.bind(indexRoute));
        router.get(prefix, indexRoute.index.bind(indexRoute));
        return router;
    }
}
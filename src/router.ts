import * as http from 'http';

type RouteCallback = (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    jsonRequest: Object
) => void;

interface Route {
    path: string,
    callback: RouteCallback
};

class Router {
    routers: Route[] = [];
    constructor() {
    }
    add(path: string, callback: RouteCallback) {
        this.routers.push({ path, callback });
    }
    find(url: string): void | Route {
        const foundRouters = this.routers.filter(
            (r) => url.startsWith(r.path)
        );
        if (foundRouters.length > 0) {
            return foundRouters[0];
        }
        return;
    }
}

export { Router }

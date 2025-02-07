import * as http from 'http';

async function hello(req: http.IncomingMessage, res: http.ServerResponse, jsonRequest: Object) {
    res.write(JSON.stringify({ success: true }));
    return;
}

export { hello };

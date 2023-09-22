import express, { Express, Request, Response } from 'express';
import { config } from './config';
import { render } from './render';

const app: Express = express();

app.get('*', (req: Request, res: Response) => {
	res.send(render(req.url));
});

app.listen(config.PORT, () => {
	console.log(`Listening http://localhost:${config.PORT}`);
});

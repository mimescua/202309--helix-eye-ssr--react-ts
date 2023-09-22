import errorOverlay from 'react-dev-utils/errorOverlayMiddleware';
import openBrowser from 'react-dev-utils/openBrowser';
import webpack from 'webpack';
import wdm from 'webpack-dev-middleware';
import whm from 'webpack-hot-middleware';
import webpackClientConfig from '../../../webpack.config.client.js';
import { config } from '../config';

export const webpackMiddleware = () => {
	openBrowser(`http://localhost:${config.PORT}`);

	const compiler = webpack(webpackClientConfig);

	return [
		whm(compiler, { log: console.log, path: '/__webpack_hmr', heartbeat: 200 }),
		wdm(compiler, { serverSideRender: true, writeToDisk: true }),
		errorOverlay(),
	];
};

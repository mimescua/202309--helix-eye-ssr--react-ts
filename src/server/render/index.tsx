import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from '../../app/containers/App';
import { template } from './template';

export const render = (url: string) => {
	const stream = renderToString(
		<StaticRouter location={url}>
			<App />
		</StaticRouter>
	);

	const html = template(stream);
	return html;
};

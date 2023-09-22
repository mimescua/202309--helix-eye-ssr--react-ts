import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/favicon.ico';
import { App } from './containers/App';

const container = document.getElementById('app');

const initialProps = window.__INITIAL_PROPS__;

hydrateRoot(
	container,
	<BrowserRouter>
		<App {...initialProps} />
	</BrowserRouter>
);

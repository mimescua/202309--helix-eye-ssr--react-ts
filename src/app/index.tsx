import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './assets/favicon.ico';
import { App } from './containers/App';

const container = document.getElementById('app');

hydrateRoot(
	container,
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

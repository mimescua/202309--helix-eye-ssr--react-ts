import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { Galaxies } from '../pages/Galaxies';
import { Home } from '../pages/Home';
import { GlobalStyles } from '../styles/GlobalStyles';

export const App = () => {
	return (
		<>
			<GlobalStyles />
			<Menu />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/galaxias" element={<Galaxies />} />
			</Routes>
			<Footer />
		</>
	);
};

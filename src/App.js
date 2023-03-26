import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Compare from './components/compare/Compare';
import Animation from './components/animation/Animation';
import PrivateRoute from './routing/PrivateRoute';
import { AnimationDataProvider } from './context/animationContext';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<AnimationDataProvider>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route
							path='compare'
							element={
								<PrivateRoute>
									<Compare />
								</PrivateRoute>
							}
						/>

						<Route
							path='animation'
							element={
								<PrivateRoute>
									<Animation />
								</PrivateRoute>
							}
						/>
					</Routes>
				</AnimationDataProvider>
			</div>
		</BrowserRouter>
	);
}

export default App;

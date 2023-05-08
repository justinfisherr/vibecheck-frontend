import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Animation from './components/animation/Animation';
import Compare from './components/compare/Compare';
import Homepage from './components/homepage/Homepage';
import { AnimationDataProvider } from './context/animationContext';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './routing/PrivateRoute';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<AuthProvider>
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
				</AuthProvider>
			</div>
		</BrowserRouter>
	);
}

export default App;

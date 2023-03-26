import React, { createContext, useRef } from 'react';
export const animationContext = createContext();

export function AnimationDataProvider({ children }) {
	const animationData = useRef({});

	return (
		<animationContext.Provider value={animationData}>
			{children}
		</animationContext.Provider>
	);
}

import React, { createContext, useRef } from 'react';
export const authContext = createContext();

export function AuthProvider({ children }) {
	const auth = useRef(false);

	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

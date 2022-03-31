import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextProps {
	isAuth: boolean;
	authenticate: () => Promise<void>;
}

interface AuthProviderProps {
	children: ReactNode;
}

const Auth = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	const [isAuth, setIsAuth] = useState(false);

	async function authenticate() {
		setIsAuth(true);
	}

	return (
		<Auth.Provider value={{ isAuth, authenticate }}>{children}</Auth.Provider>
	);
}

export function useAuth() {
	return useContext(Auth);
}

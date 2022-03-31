import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
	const { isAuth } = useAuth();

	return (
		<NavigationContainer>
			{isAuth ? <AppRoutes /> : <AuthRoutes />}
		</NavigationContainer>
	);
}

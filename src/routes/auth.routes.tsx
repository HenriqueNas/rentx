import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackParams } from './routes';

import { Splash } from '../screens/Splash';
import { Login } from '../screens/Auth/Login';
import { Register } from '../screens/Auth/Register';
import { Password } from '../screens/Auth/Register/Password';
import { RegisterComplete } from '../screens/Auth/RegisterComplete';

const { Navigator, Screen } = createStackNavigator<AuthStackParams>();

export function AuthRoutes() {
	return (
		<Navigator
			initialRouteName="Splash"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Splash" component={Splash} />
			<Screen name="Login" component={Login} />
			<Screen name="Register" component={Register} />
			<Screen name="Password" component={Password} />
			<Screen name="RegisterComplete" component={RegisterComplete} />
		</Navigator>
	);
}

import React from 'react';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { createStackNavigator } from '@react-navigation/stack';
import { SchedulingDetails } from '../screens/SchedulingDetails';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Home" component={Home} />
			<Screen name="CarDetails" component={CarDetails} />
			<Screen name="Scheduling" component={Scheduling} />
			<Screen name="SchedulingDetails" component={SchedulingDetails} />
		</Navigator>
	);
}

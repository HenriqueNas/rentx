import React from 'react';

import { Home } from '../screens/Home';
import { RentedCars } from '../screens/RentedCars';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { createStackNavigator } from '@react-navigation/stack';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

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
			<Screen name="RentedCars" component={RentedCars} />
			<Screen name="CarDetails" component={CarDetails} />
			<Screen name="Scheduling" component={Scheduling} />
			<Screen name="SchedulingDetails" component={SchedulingDetails} />
			<Screen name="SchedulingComplete" component={SchedulingComplete} />
		</Navigator>
	);
}

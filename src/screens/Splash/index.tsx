import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';

import {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	interpolate,
	Extrapolate,
	runOnJS,
} from 'react-native-reanimated';

import { useAuth } from '../../contexts/auth';
import { useAppNavigation, useAuthNavigation } from '../../hooks/navigation';

import { Container, ContentWrapper, Brand, Logo } from './styles';

const WIDTH = Dimensions.get('window').width;

export function Splash() {
	const { isAuth } = useAuth();
	const authNavigation = useAuthNavigation();
	const appNavigation = useAppNavigation();

	const splashAnimation = useSharedValue(0);

	const brandStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(splashAnimation.value, [0, 25, 50], [1, 0.9, 0]),
			transform: [
				{
					translateX: interpolate(
						splashAnimation.value,
						[0, 50],
						[0, 80],
						Extrapolate.CLAMP
					),
				},
			],
		};
	});

	const logoStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(splashAnimation.value, [0, 40, 50], [0, 0, 1]),
		};
	});

	function goToHomeScreen() {
		isAuth ? appNavigation.navigate('Home') : authNavigation.navigate('Login');
	}

	useEffect(() => {
		splashAnimation.value = withTiming(
			50,
			{
				duration: 1000,
			},
			() => {
				'worklet';
				runOnJS(goToHomeScreen)();
			}
		);
	});

	return (
		<Container>
			<ContentWrapper style={brandStyle}>
				<Brand />
			</ContentWrapper>
			<ContentWrapper style={logoStyle}>
				<Logo />
			</ContentWrapper>
		</Container>
	);
}

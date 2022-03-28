import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';

import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	interpolate,
	Extrapolate,
	runOnJS,
} from 'react-native-reanimated';

import { useAppNavigation } from '../../hooks/navigation';

import { Container, Brand, Logo } from './styles';

const WIDTH = Dimensions.get('window').width;

export function Splash() {
	const navigation = useAppNavigation();

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
		navigation.navigate('Home');
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
			<Animated.View style={[brandStyle, { position: 'absolute' }]}>
				<Brand />
			</Animated.View>
			<Animated.View style={[logoStyle, { position: 'absolute' }]}>
				<Logo />
			</Animated.View>
		</Container>
	);
}

import React from 'react';

import LottieView from 'lottie-react-native';

import loadingAnimated from '../../assets/load_animated.json';

import { Container } from './styles';

export function Loading() {
	return (
		<Container>
			<LottieView
				source={loadingAnimated}
				resizeMode="contain"
				autoPlay
				loop
				style={{
					height: 200,
				}}
			/>
		</Container>
	);
}

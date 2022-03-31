import React from 'react';

import { PanGestureHandler } from 'react-native-gesture-handler';
import {
	useAnimatedStyle,
	useSharedValue,
	useAnimatedGestureHandler,
	withSpring,
} from 'react-native-reanimated';

import { ButtonWrapper, CarIcon, RentedCars } from './styles';

interface Props {
	onPress: () => void;
}

export function FloatButton({ onPress }: Props) {
	const rentedButtonPositionY = useSharedValue(0);
	const rentedButtonPositionX = useSharedValue(0);

	const animatedButtonStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateY: rentedButtonPositionY.value },
				{ translateX: rentedButtonPositionX.value },
			],
		};
	});

	const handlerGestureEvent = useAnimatedGestureHandler({
		onStart(_, context: any) {
			context.positionX = rentedButtonPositionX.value;
			context.positionY = rentedButtonPositionY.value;
		},
		onActive(event, context: any) {
			rentedButtonPositionX.value = context.positionX + event.translationX;
			rentedButtonPositionY.value = context.positionY + event.translationY;
		},
		onEnd() {
			rentedButtonPositionX.value = withSpring(0);
			rentedButtonPositionY.value = withSpring(0);
		},
	});

	return (
		<PanGestureHandler onGestureEvent={handlerGestureEvent}>
			<ButtonWrapper style={animatedButtonStyle}>
				<RentedCars onPress={onPress}>
					<CarIcon />
				</RentedCars>
			</ButtonWrapper>
		</PanGestureHandler>
	);
}

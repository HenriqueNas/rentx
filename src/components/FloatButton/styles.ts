import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

const AnimatedButton = Animated.createAnimatedComponent(RectButton);

export const ButtonWrapper = styled(Animated.View)`
	position: absolute;
	right: 24px;
	bottom: 24px;
`;

export const RentedCars = styled(AnimatedButton)`
	background-color: ${({ theme }) => theme.color.main};
	border-radius: ${RFValue(30)}px;

	align-items: center;
	justify-content: center;

	width: ${RFValue(60)}px;
	height: ${RFValue(60)}px;
`;

export const CarIcon = styled(Ionicons).attrs({
	name: 'ios-car-sport',
})`
	font-size: ${RFValue(32)}px;
	color: ${({ theme }) => theme.color.background_secondary};
`;

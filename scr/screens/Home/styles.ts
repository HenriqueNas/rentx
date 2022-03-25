import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarDTO } from '../../models/car';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.color.background_primary};
`;

export const Header = styled.View`
	width: 100%;
	height: 113px;
	padding: 32px 16px;

	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.color.header};
`;

export const TotalCars = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_regular};
	color: ${({ theme }) => theme.color.text};
`;

export const CarsList = styled(
	FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
	contentContainerStyle: {
		padding: 24,
	},
	showsVerticalScrollIndicator: false,
})``;

export const RentedCars = styled(RectButton)`
	background-color: ${({ theme }) => theme.color.main};
	border-radius: ${RFValue(30)}px;

	align-items: center;
	justify-content: center;

	width: ${RFValue(60)}px;
	height: ${RFValue(60)}px;

	position: absolute;
	bottom: 24px;
	right: 24px;
`;

export const CarIcon = styled(Ionicons).attrs({
	name: 'ios-car-sport',
})`
	font-size: ${RFValue(32)}px;
	color: ${({ theme }) => theme.color.background_secondary};
`;

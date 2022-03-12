import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { CarProps } from '../../models/car';

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
	FlatList as new (props: FlatListProps<CarProps>) => FlatList<CarProps>
).attrs({
	contentContainerStyle: {
		padding: 24,
	},
	showsVerticalScrollIndicator: false,
})``;

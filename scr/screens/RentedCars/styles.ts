import styled from 'styled-components/native';

import { FlatList, FlatListProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { ScheduleDTO } from '../../models/schedule';

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	justify-content: space-between;

	width: 100%;
	padding: 32px 24px;
	padding-top: ${getStatusBarHeight() + 24}px;

	background-color: ${({ theme }) => theme.color.header};
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.color.shape};
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	font-size: ${RFValue(32)}px;

	margin: 32px 0;
`;

export const Subtitle = styled.Text`
	color: ${({ theme }) => theme.color.shape};
	font-family: ${({ theme }) => theme.fonts.secondary_regular};
	font-size: ${RFValue(15)}px;
`;

export const CarsList = styled(
	FlatList as new (props: FlatListProps<ScheduleDTO>) => FlatList<ScheduleDTO>
).attrs({
	contentContainerStyle: {
		padding: 24,
	},
	showsVerticalScrollIndicator: false,
})``;

export const TotalRentalsWrapper = styled.View`
	width: 100%;
	padding: 24px 24px 12px;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const TotalRentalsLabel = styled.Text`
	color: ${({ theme }) => theme.color.text};
	font-family: ${({ theme }) => theme.fonts.primary_regular};
	font-size: ${RFValue(15)}px;
`;

export const TotalRentalsValue = styled.Text`
	color: ${({ theme }) => theme.color.title};
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	font-size: ${RFValue(15)}px;
`;

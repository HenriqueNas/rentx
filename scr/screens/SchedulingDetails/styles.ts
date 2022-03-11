import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import {
	getStatusBarHeight,
	getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
	flex: 1;
	padding-top: ${getStatusBarHeight() + 46}px;
	background-color: ${({ theme }) => theme.color.background_secondary};
`;

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	position: absolute;
	margin-top: ${getStatusBarHeight() + 36}px;
	margin-left: 24px;
`;

export const Details = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})`
	padding: 0 24px;
`;

export const Info = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;

	margin-top: 16px;
`;

export const Div = styled.View``;

export const Brand = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};

	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.text_details};

	margin-bottom: 4px;
`;

export const Model = styled.Text`
	font-size: ${RFValue(25)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.title};
`;

export const Period = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};

	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.text_details};

	margin-bottom: 4px;
`;

export const Price = styled.Text`
	font-size: ${RFValue(25)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.main};
`;

export const OptionalGrid = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	margin: 16px 0;
	justify-content: space-between;
`;

export const RentalPeriod = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding-bottom: 16px;
	margin-top: 24px;

	border-bottom-width: 0.6px;
	border-bottom-color: ${({ theme }) => theme.color.text};
`;

export const IconWrapper = styled.View`
	padding: 12px;
	background-color: ${({ theme }) => theme.color.main};
`;

export const CalendarIcon = styled(Feather).attrs({
	name: 'calendar',
})`
	font-size: ${RFValue(24)}px;
	color: ${({ theme }) => theme.color.shape};
`;

export const ArrowIcon = styled(Feather).attrs({
	name: 'chevron-right',
})`
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.color.text};
`;

export const DateInfo = styled.View`
	flex: 1;
	padding: 0 24px;
`;

export const DateLabel = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};

	color: ${({ theme }) => theme.color.text};
	letter-spacing: 1px;
`;

export const DateValue = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_medium};
	color: ${({ theme }) => theme.color.title};
`;

export const RentalTotal = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	margin: 16px 0;
`;

export const TotalInfo = styled.View``;

export const TotalLabel = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};

	color: ${({ theme }) => theme.color.text};
	letter-spacing: 1px;
`;

export const TotalMath = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_medium};
	color: ${({ theme }) => theme.color.title};
`;

export const TotalResult = styled.Text`
	font-size: ${RFValue(24)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_bold};
	color: ${({ theme }) => theme.color.success};
`;

export const Footer = styled.View`
	width: 100%;

	padding: 24px;
	padding-bottom: ${getBottomSpace() + 24}px;

	background-color: ${({ theme }) => theme.color.background_primary};
`;

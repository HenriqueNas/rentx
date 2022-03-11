import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.color.background_secondary};
`;

export const Header = styled.View`
	justify-content: space-between;

	width: 100%;
	height: 325px;
	padding: 32px 24px;
	padding-top: ${getStatusBarHeight() + 24}px;

	background-color: ${({ theme }) => theme.color.header};
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.color.shape};
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	font-size: ${RFValue(34)}px;

	margin: 32px 0;
`;

export const RentalPeriod = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	width: 100%;
`;

export const DateInfo = styled.View`
	width: 30%;
`;

export const DateLabel = styled.Text`
	font-size: ${RFValue(10)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};

	color: ${({ theme }) => theme.color.text};
	letter-spacing: 1px;
`;

export const DateValue = styled.Text`
	${({ theme, children }) =>
		!children &&
		css`
			border-bottom-width: 1px;
			border-bottom-color: ${theme.color.text};
			padding-bottom: 5px;
		`}

	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_medium};
	color: ${({ theme }) => theme.color.shape};
`;

export const Content = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: {
		paddingBottom: 24,
	},
})``;

export const Footer = styled.View`
	padding: 24px;
`;

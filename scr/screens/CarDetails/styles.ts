import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: ${getStatusBarHeight() + 46}px 24px;
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

export const Details = styled.View``;

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
	margin-top: 16px;
	justify-content: space-between;
`;

export const Description = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_regular};

	text-align: justify;
	color: ${({ theme }) => theme.color.text};
	line-height: ${RFValue(25)}px;

	margin-top: 24px;
`;
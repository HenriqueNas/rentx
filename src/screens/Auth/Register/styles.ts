import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	padding: 0 24px;
	background-color: ${({ theme }) => theme.color.background_primary};
`;

export const Header = styled.View`
	position: absolute;
	margin-left: 24px;
	padding-top: ${getStatusBarHeight() + 60}px;
	z-index: 1;
`;

export const Content = styled.View`
	width: 100%;
	height: 100%;

	justify-content: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.color.title};
	font-size: ${RFValue(40)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
`;

export const Subtitle = styled.Text`
	margin-top: 16px;
	margin-bottom: 10%;

	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_regular};

	color: ${({ theme }) => theme.color.text};
	line-height: 30px;
`;

export const Step = styled.Text`
	margin-bottom: 24px;
	color: ${({ theme }) => theme.color.title};
	font-size: ${RFValue(20)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
`;

export const Form = styled.View`
	width: 100%;
	min-height: 38%;
	justify-content: space-between;
`;

export const View = styled.View``;

export const Divider = styled.View`
	height: 8px;
`;

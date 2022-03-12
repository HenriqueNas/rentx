import styled from 'styled-components/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import CheckBoxSvg from '../../assets/done.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.color.header};
	align-items: center;

	padding-top: 11%;
`;

export const LogoBackground = styled(LogoSvg)``;

export const CheckBox = styled(CheckBoxSvg)``;

export const Title = styled.Text`
	margin-top: 40px;
	margin-bottom: 16px;

	font-size: ${RFValue(30)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.shape};
`;

export const Text = styled.Text`
	margin: 0 77px;

	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_regular};

	color: ${({ theme }) => theme.color.text};
	text-align: center;
	line-height: ${RFValue(25)}px; ;
`;

export const ConfirmButton = styled.TouchableOpacity`
	margin-top: 80px;
	padding: 19px 25px;
	background-color: ${({ theme }) => theme.color.shape_dark};
`;

export const ConfirmText = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_regular};
	color: ${({ theme }) => theme.color.shape};
`;

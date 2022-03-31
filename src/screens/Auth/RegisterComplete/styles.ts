import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import CheckBoxSvg from '../../../assets/done.svg';
import LogoSvg from '../../../assets/logo_background_gray.svg';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.color.header};

	align-items: center;
	justify-content: space-around;
	padding-bottom: ${RFValue(32)}px;
`;

export const LogoBackground = styled(LogoSvg)``;

export const CheckBox = styled(CheckBoxSvg)``;

export const Title = styled.Text`
	font-size: ${RFValue(30)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.shape};
`;

export const ConfirmButton = styled.TouchableOpacity`
	padding: 19px 25px;
	background-color: ${({ theme }) => theme.color.shape_dark};
`;

export const ConfirmText = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_regular};
	color: ${({ theme }) => theme.color.shape};
`;

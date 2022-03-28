import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	width: 32%;

	padding: 16px;
	margin-bottom: 8px;

	align-items: center;

	background-color: ${({ theme }) => theme.color.background_primary};
`;

export const Name = styled.Text`
	font-size: ${RFValue(12)}px;
	font-family: ${({ theme }) => theme.fonts.primary_medium};
	color: ${({ theme }) => theme.color.text};
	margin-top: 12px;
`;

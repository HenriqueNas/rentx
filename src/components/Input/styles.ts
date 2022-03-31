import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
	isFocused: boolean;
}

interface IconProps {
	isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
	flex-direction: row;
	align-items: center;

	width: 100%;
	padding: 18px 16px;
	min-height: 60px;

	background-color: ${({ theme }) => theme.color.background_secondary};
	border-bottom-width: 2px;
	border-bottom-color: ${({ theme, isFocused }) =>
		isFocused ? theme.color.main : theme.color.background_secondary};
`;

export const Icon = styled(Ionicons)<IconProps>`
	color: ${({ theme, isFilled }) =>
		isFilled ? theme.color.main : theme.color.text};
	font-size: ${RFValue(18)}px;
`;

export const Divider = styled.View`
	width: 2px;
	height: 100%;
	margin-left: 16px;
	background-color: ${({ theme }) => theme.color.background_primary};
`;

export const TextInput = styled.TextInput`
	flex: 1;
	margin-left: 16px;

	color: ${({ theme }) => theme.color.text};
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_regular};
`;

export const PasswordButton = styled(RectButton)``;

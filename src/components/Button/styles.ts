import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { ColorType } from '../../styles/theme';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
	color: ColorType;
}

interface TextProps {
	isLightBackground: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
	align-items: center;
	justify-content: center;

	padding: 16px;
	background-color: ${({ theme, color }) => theme.color[color]};
	opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
`;

export const Title = styled.Text<TextProps>`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme, isLightBackground }) =>
		isLightBackground ? theme.color.title : theme.color.shape};
`;

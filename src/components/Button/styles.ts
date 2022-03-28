import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { ColorType } from '../../styles/theme';

interface ContainerProps {
	color: ColorType;
	disabled: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	align-items: center;
	justify-content: center;

	padding: 16px;
	background-color: ${({ theme, color }) => theme.color[color]};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Title = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_medium};
	color: ${({ theme }) => theme.color.background_secondary};
`;
import React from 'react';

import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container, BackIcon } from './styles';
import { ColorType } from '../../styles/theme';

interface Props extends BorderlessButtonProps {
	color?: ColorType;
}

export function GoBackButton({ color = 'text' }: Props) {
	const theme = useTheme();

	return (
		<Container>
			<BackIcon color={theme.color[color]} />
		</Container>
	);
}

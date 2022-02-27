import React from 'react';

import { useTheme } from 'styled-components';

import { Container, BackIcon } from './styles';
import { ColorType } from '../../styles/theme';
import { useAppNavigation } from '../../hooks/navigation';

interface Props {
	color?: ColorType;
}

export function GoBackButton({ color = 'text' }: Props) {
	const theme = useTheme();
	const { goBack } = useAppNavigation();

	return (
		<Container onPress={goBack}>
			<BackIcon color={theme.color[color]} />
		</Container>
	);
}

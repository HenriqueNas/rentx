import React from 'react';

import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppStackParams } from '../../routes/routes';
import { ColorType } from '../../styles/theme';

import { Container, BackIcon } from './styles';
import { useAppNavigation } from '../../hooks/navigation';

interface Props {
	color?: ColorType;
}

export function GoBackButton({ color = 'text' }: Props) {
	const theme = useTheme();
	const navigation = useAppNavigation();

	return (
		<Container onPress={navigation.goBack}>
			<BackIcon color={theme.color[color]} />
		</Container>
	);
}

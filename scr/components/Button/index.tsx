import React from 'react';

import { ColorType } from '../../styles/theme';

import { Container, Title } from './styles';

interface Props {
	title: string;
	color?: ColorType;
	onPress: () => void;
}

export function Button({ title, color = 'main', onPress, ...rest }: Props) {
	return (
		<Container onPress={onPress} color={color} {...rest}>
			<Title>{title}</Title>
		</Container>
	);
}

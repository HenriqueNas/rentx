import React from 'react';

import { ColorType } from '../../styles/theme';

import { Container, Title } from './styles';

interface Props {
	title: string;
	color?: ColorType;
	disabled?: boolean;
	onPress: () => void;
}

export function Button({
	title,
	color = 'main',
	disabled = false,
	onPress,
	...rest
}: Props) {
	function handlePress() {
		if (disabled) return;
		onPress();
	}

	return (
		<Container disabled={disabled} onPress={onPress} color={color} {...rest}>
			<Title>{title}</Title>
		</Container>
	);
}

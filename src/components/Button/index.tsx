import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { ColorType } from '../../styles/theme';

import { Container, Title } from './styles';

interface Props {
	title: string;
	color?: ColorType;
	disabled?: boolean;
	isLoading?: boolean;
	onPress: () => void;
}

export function Button({
	title,
	color = 'main',
	disabled = false,
	isLoading = false,
	onPress,
	...rest
}: Props) {
	const theme = useTheme();
	function handlePress() {
		if (disabled) return;
		onPress();
	}

	return (
		<Container
			disabled={disabled}
			onPress={handlePress}
			color={color}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={theme.color.shape} />
			) : (
				<Title>{title}</Title>
			)}
		</Container>
	);
}

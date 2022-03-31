import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { ColorType } from '../../styles/theme';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
	title: string;
	color?: ColorType;
	isLoading?: boolean;
}

export function Button({
	title,
	color = 'main',
	enabled = true,
	isLoading = false,
	...rest
}: Props) {
	const theme = useTheme();

	const lightColors: ColorType[] = [
		'background_primary',
		'background_secondary',
		'shape',
		'line',
		'main_light',
	];

	const isLightBackground = lightColors.includes(color);

	return (
		<Container color={color} enabled={enabled} {...rest}>
			{isLoading ? (
				<ActivityIndicator size="small" color={theme.color.shape} />
			) : (
				<Title isLightBackground={isLightBackground}>{title}</Title>
			)}
		</Container>
	);
}

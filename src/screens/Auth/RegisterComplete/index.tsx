import React from 'react';
import { StatusBar } from 'react-native';

import { useAuthNavigation } from '../../../hooks/navigation';

import {
	Container,
	CheckBox,
	LogoBackground,
	Title,
	ConfirmButton,
	ConfirmText,
} from './styles';

export function RegisterComplete() {
	const navigation = useAuthNavigation();

	function handleNavigate() {
		navigation.navigate('Login');
	}

	return (
		<Container>
			<StatusBar barStyle="light-content" />
			<LogoBackground />
			<CheckBox />
			<Title>Conta Criada</Title>
			<ConfirmButton onPress={handleNavigate}>
				<ConfirmText>Entrar</ConfirmText>
			</ConfirmButton>
		</Container>
	);
}

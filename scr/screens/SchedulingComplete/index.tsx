import React from 'react';

import { useAppNavigation } from '../../hooks/navigation';

import {
	CheckBox,
	Container,
	LogoBackground,
	Title,
	Text,
	ConfirmButton,
	ConfirmText,
} from './styles';

export function SchedulingComplete() {
	const navigation = useAppNavigation();

	function handleNavigate() {
		navigation.navigate('Home');
	}

	return (
		<Container>
			<LogoBackground />
			<CheckBox />
			<Title>Carro alugado!</Title>
			<Text>
				Agora você só precisa ir {'\n'}
				até a concessionária da RENTX {'\n'}
				pegar o seu automóvel.
			</Text>
			<ConfirmButton onPress={handleNavigate}>
				<ConfirmText>Ok</ConfirmText>
			</ConfirmButton>
		</Container>
	);
}

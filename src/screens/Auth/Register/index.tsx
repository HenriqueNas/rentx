import React, { useEffect, useRef, useState } from 'react';
import {
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	StatusBar,
	TextInput,
	Alert,
} from 'react-native';

import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import * as Yup from 'yup';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { GoBackButton } from '../../../components/GoBackButton';

import { useAuthNavigation } from '../../../hooks/navigation';

import {
	Container,
	Header,
	Content,
	Title,
	Subtitle,
	Step,
	Form,
	Divider,
	View,
} from './styles';

export function Register() {
	const navigation = useAuthNavigation();

	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [drivingLicense, setDrivingLicense] = useState<string>();

	const emailInputRef = useRef<TextInput>(null);
	const drivingLicenseInputRef = useRef<TextInput>(null);

	async function handleRegister() {
		try {
			const numberRegex = /\d+/g;

			const schema = Yup.object().shape({
				drivingLicense: Yup.string()
					.required('Campo CNH é obrigatório.')
					.matches(numberRegex, 'Campo CNH deve ser numérico')
					.min(11, 'Campo CNH deve conter 11 dígitos')
					.max(11, 'Campo CNH deve conter 11 dígitos'),
				email: Yup.string()
					.required('Campo E-mail é obrigatório.')
					.email('Campo E-mail deve ser um e-mail válido'),
				name: Yup.string()
					.required('Campo Nome é obrigatório.')
					.min(3, 'Nome deve conter no mínimo 3 caracteres.'),
			});

			await schema.validate({ name, email, drivingLicense });

			navigation.navigate('Password', {
				name,
				email,
				drivingLicense,
			});
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				Alert.alert('Opa, algo deu errado.', error.message);
			} else {
				Alert.alert('Opa, algo deu errado.', 'Tente novamente mais tarde!');
			}
		}
	}

	const headerText = useSharedValue(0);

	const headerAnimatedStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(headerText.value, [0, 25, 50], [1, 0.9, 0]),
			transform: [
				{ translateX: interpolate(headerText.value, [0, 50], [0, 300]) },
			],
		};
	});

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardWillShow',
			() => (headerText.value = withTiming(50))
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardWillHide',
			() => (headerText.value = withTiming(0))
		);

		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	});

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView behavior="padding" enabled>
				<StatusBar barStyle="dark-content" />
				<Container>
					<Header>
						<GoBackButton />
					</Header>

					<Content>
						<Animated.View style={headerAnimatedStyle}>
							<Title>Crie sua{'\n'}conta</Title>
							<Subtitle>
								Faça seu cadastro de{'\n'}forma rápida e fácil.
							</Subtitle>
						</Animated.View>

						<Form>
							<Step>1. Dados</Step>

							<View>
								<Input
									icon="person-outline"
									placeholder="Nome"
									autoCapitalize="sentences"
									autoCorrect={false}
									returnKeyType="next"
									onSubmitEditing={() => emailInputRef.current?.focus()}
									value={name}
									onChangeText={setName}
								/>
								<Divider />
								<Input
									ref={emailInputRef}
									icon="mail-outline"
									placeholder="E-mail"
									keyboardType="email-address"
									autoCapitalize="none"
									autoCorrect={false}
									returnKeyType="next"
									onSubmitEditing={() =>
										drivingLicenseInputRef.current?.focus()
									}
									value={email}
									onChangeText={setEmail}
								/>
								<Divider />
								<Input
									ref={drivingLicenseInputRef}
									icon="card-outline"
									placeholder="CNH"
									keyboardType="number-pad"
									autoCapitalize="none"
									autoCorrect={false}
									returnKeyType="done"
									value={drivingLicense}
									onChangeText={setDrivingLicense}
									onSubmitEditing={handleRegister}
								/>
							</View>

							<Divider />

							<View>
								<Button
									title="Próximo"
									onPress={handleRegister}
									enabled={!!name && !!email && !!drivingLicense}
								/>
								<Divider />
							</View>
						</Form>
					</Content>
				</Container>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

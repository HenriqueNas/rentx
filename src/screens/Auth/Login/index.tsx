import React, { useRef, useState } from 'react';
import {
	Keyboard,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	StatusBar,
	TextInput,
	Alert,
} from 'react-native';

import * as Yup from 'yup';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import { useAuth } from '../../../contexts/auth';
import { useAuthNavigation } from '../../../hooks/navigation';

import {
	Container,
	Content,
	Title,
	Subtitle,
	Form,
	Divider,
	View,
} from './styles';

export function Login() {
	const navigation = useAuthNavigation();
	const { authenticate } = useAuth();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();

	const passwordInputRef = useRef<TextInput>(null);

	async function handleAuthenticate() {
		try {
			const scheme = Yup.object().shape({
				password: Yup.string()
					.required('Senha é obrigatório')
					.min(8, 'A senha de ter pelo menos 8 caracteres'),
				email: Yup.string()
					.required('E-mail é obrigatório')
					.email('Digite um e-mail válido'),
			});

			await scheme.validate({ email, password });

			setIsLoading(true);
			// await authenticate();
		} catch (error) {
			setIsLoading(false);
			if (error instanceof Yup.ValidationError) {
				Alert.alert('Opa, algo deu errado.', error.message);
			} else {
				Alert.alert(
					'Opa, não foi possível completar o login.',
					'Tente novamente mais tarde!'
				);
			}
		}
	}

	function handleRegister() {
		navigation.navigate('Register');
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView behavior="padding" enabled>
				<StatusBar barStyle="dark-content" />
				<Container>
					<Content>
						<Title>Estamos {'\n'}quase lá.</Title>
						<Subtitle>
							Faça seu login para começar {'\n'}uma experiência incrível.
						</Subtitle>

						<Form>
							<View>
								<Input
									icon="mail-outline"
									placeholder="E-mail"
									keyboardType="email-address"
									autoCapitalize="none"
									autoCorrect={false}
									returnKeyType="next"
									onSubmitEditing={() => passwordInputRef.current?.focus()}
									value={email}
									onChangeText={setEmail}
								/>
								<Divider />
								<Input
									ref={passwordInputRef}
									password
									icon="lock-closed-outline"
									placeholder="Senha"
									autoCapitalize="none"
									autoCorrect={false}
									returnKeyType="done"
									value={password}
									onChangeText={setPassword}
									onEndEditing={handleAuthenticate}
								/>
							</View>

							<Divider />

							<View>
								<Button
									title="Login"
									onPress={handleAuthenticate}
									enabled={!!email && !!password}
									isLoading={isLoading}
								/>
								<Divider />
								<Button
									title="Criar conta gratuita"
									onPress={handleRegister}
									color="background_secondary"
								/>
							</View>
						</Form>
					</Content>
				</Container>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

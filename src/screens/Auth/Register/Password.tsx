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
import { GoBackButton } from '../../../components/GoBackButton';

import { useAuthNavigation } from '../../../hooks/navigation';

import {
	Container,
	Header,
	Content,
	Form,
	Divider,
	View,
	Step,
} from './styles';

export function Password() {
	const navigation = useAuthNavigation();

	const [password, setPassword] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState<string>();

	const confirmPasswordInputRef = useRef<TextInput>(null);

	async function handleRegister() {
		try {
			const schema = Yup.object().shape({
				confirmPassword: Yup.string().oneOf(
					[Yup.ref('password')],
					'As senhas devem coincidir!'
				),
				password: Yup.string()
					.required('Campo Senha é obrigatório')
					.min(8, 'Campo Senha deve conter no mínimo 8 caracteres'),
			});

			await schema.validate({ password, confirmPassword });

			navigation.navigate('RegisterComplete');
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				Alert.alert('Opa, algo deu errado.', error.message);
			} else {
				Alert.alert('Opa, algo deu errado.', 'Tente novamente mais tarde!');
			}
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView behavior="padding" enabled>
				<StatusBar barStyle="dark-content" />
				<Container>
					<Header>
						<GoBackButton />
					</Header>

					<Content>
						<Form>
							<Step>2. Senha</Step>
							<View>
								<Input
									password
									icon="lock-open-outline"
									placeholder="Senha"
									autoCapitalize="none"
									autoCorrect={false}
									value={password}
									onChangeText={setPassword}
									onSubmitEditing={() =>
										confirmPasswordInputRef.current?.focus()
									}
									returnKeyType="next"
								/>
								<Divider />
								<Input
									ref={confirmPasswordInputRef}
									password
									icon="lock-closed-outline"
									placeholder="Confirmar Senha"
									autoCapitalize="none"
									autoCorrect={false}
									value={confirmPassword}
									onChangeText={setConfirmPassword}
									onEndEditing={handleRegister}
									returnKeyType="done"
								/>
							</View>

							<Divider />

							<View>
								<Button
									title="Cadastrar"
									color="success"
									onPress={handleRegister}
									enabled={!!password && !!confirmPassword}
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

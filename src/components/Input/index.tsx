import React, { useRef, useState } from 'react';
import { TextInputProps, TextInput as ReactInput } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Container, Icon, Divider, TextInput, PasswordButton } from './styles';

interface Props extends TextInputProps {
	icon?: React.ComponentProps<typeof Ionicons>['name'];
	password?: boolean;
}

export const Input = React.forwardRef<ReactInput, Props>(
	({ icon, password, value, ...rest }, ref) => {
		const [passwordIsVisible, setPasswordIsVisible] = useState(false);

		const [isFocused, setIsFocused] = useState(false);
		const isFilled = !!value;

		function handleOnFocus() {
			setIsFocused(true);
		}

		function handleOnBlur() {
			setIsFocused(false);
		}

		function togglePasswordVisibility() {
			setPasswordIsVisible(!passwordIsVisible);
		}

		return (
			<Container isFocused={isFocused}>
				{icon && (
					<>
						<Icon name={icon} isFilled={isFilled || isFocused} />
						<Divider />
					</>
				)}
				<TextInput
					{...rest}
					ref={ref}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					secureTextEntry={password && !passwordIsVisible}
				/>
				{password && (
					<PasswordButton onPress={togglePasswordVisibility}>
						<Icon
							name={passwordIsVisible ? 'eye-outline' : 'eye-off-outline'}
						/>
					</PasswordButton>
				)}
			</Container>
		);
	}
);

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppStackParams, AuthStackParams } from '../routes/routes';

export function useAppNavigation() {
	const navigation = useNavigation<StackNavigationProp<AppStackParams>>();

	return navigation;
}

export function useAuthNavigation() {
	const navigation = useNavigation<StackNavigationProp<AuthStackParams>>();

	return navigation;
}

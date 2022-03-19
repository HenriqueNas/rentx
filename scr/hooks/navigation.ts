import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CarProps } from '../models/car';

import { AppStackParams } from '../routes/routes';

export function useAppNavigation() {
	const navigation = useNavigation<StackNavigationProp<AppStackParams>>();

	return navigation;
}

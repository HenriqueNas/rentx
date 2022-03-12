import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CarProps } from '../models/car';

import { AppStackParams } from '../routes/routes';

interface NavigatioProps {
	navigate: (
		...args:
			| [screen: keyof AppStackParams]
			| [
					screen: keyof AppStackParams,
					params: {
						data: CarProps;
					}
			  ]
	) => void;
	goBack: () => void;
}

export function useAppNavigation(): NavigatioProps {
	const navigation = useNavigation<StackNavigationProp<AppStackParams>>();

	function navigate(
		...args:
			| [screen: keyof AppStackParams]
			| [
					screen: keyof AppStackParams,
					params: {
						data: CarProps;
					}
			  ]
	) {
		navigation.navigate(...args);
	}

	function goBack() {
		navigation.goBack();
	}

	return {
		navigate,
		goBack,
	};
}

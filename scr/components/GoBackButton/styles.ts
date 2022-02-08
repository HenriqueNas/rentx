import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`
	flex: 1;
`;

export const BackIcon = styled(Feather).attrs({
	name: 'chevron-left',
	size: RFValue(24),
})``;

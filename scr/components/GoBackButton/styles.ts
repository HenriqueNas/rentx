import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity``;

export const BackIcon = styled(Feather).attrs({
	name: 'chevron-left',
	size: RFValue(24),
})``;

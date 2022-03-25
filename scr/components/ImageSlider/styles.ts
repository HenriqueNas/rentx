import { Dimensions, FlatList, FlatListProps } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IndexProps {
	active: boolean;
}

export const Container = styled.View`
	width: 100%;
`;

export const ImageIndexes = styled.View`
	flex-direction: row;
	align-self: flex-end;
	padding-right: 24px;
	padding-bottom: 36px;
`;

export const ImageIndex = styled.View<IndexProps>`
	height: 6px;
	width: 6px;
	margin-right: 8px;

	border-radius: 3px;
	background-color: ${({ theme, active }) =>
		active ? theme.color.title : theme.color.text};
`;

export const ImageList = styled(
	FlatList as new (props: FlatListProps<string>) => FlatList<string>
).attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
	bounces: false,
	contentContainerStyle: { alignItems: 'center' },
	snapToAlignment: 'center',
	decelerationRate: 'fast',
	snapToInterval: Dimensions.get('window').width,
})``;

export const CarImageWrapper = styled.View`
	width: ${Dimensions.get('window').width}px;
	height: ${RFPercentage(20)}px;

	align-items: center;
	justify-content: center;
`;

export const CarImage = styled.Image.attrs({
	resizeMode: 'contain',
})`
	width: ${RFPercentage(75)}px;
	height: ${RFPercentage(20)}px;
`;

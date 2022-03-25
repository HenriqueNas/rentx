import React, { useRef, useState } from 'react';
import { ViewToken } from 'react-native';

import {
	Container,
	ImageIndexes,
	ImageIndex,
	ImageList,
	CarImageWrapper,
	CarImage,
} from './styles';

interface Props {
	imagesUrl: string[];
}

interface ChangeImageProps {
	viewableItems: ViewToken[];
	changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
	const [imageIndex, setImageIndex] = useState(0);

	const handleImageIndexChange = useRef((info: ChangeImageProps) => {
		const index = info.viewableItems[0].index;
		setImageIndex(index);
	});

	return (
		<Container>
			<ImageIndexes>
				{imagesUrl.map((_, index) => (
					<ImageIndex key={index.toString()} active={imageIndex === index} />
				))}
			</ImageIndexes>

			<ImageList
				data={imagesUrl}
				keyExtractor={(key) => key}
				renderItem={({ item }) => (
					<CarImageWrapper>
						<CarImage source={{ uri: item }} />
					</CarImageWrapper>
				)}
				onViewableItemsChanged={handleImageIndexChange.current}
			/>
		</Container>
	);
}

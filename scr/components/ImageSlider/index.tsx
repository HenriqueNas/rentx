import React from 'react';

import {
	Container,
	ImageIndexes,
	ImageIndex,
	CarImageWrapper,
	CarImage,
} from './styles';

interface Props {
	imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
	return (
		<Container>
			<ImageIndexes>
				<ImageIndex active={true} />
				<ImageIndex active={false} />
				<ImageIndex active={false} />
				<ImageIndex active={false} />
				<ImageIndex active={false} />
			</ImageIndexes>

			<CarImageWrapper>
				{imagesUrl.map((item, index) => (
					<CarImage key={index} source={{ uri: item }} />
				))}
			</CarImageWrapper>
		</Container>
	);
}

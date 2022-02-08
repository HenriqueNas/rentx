import React from 'react';

import Energy from '../../assets/energy.svg';
import Gasoline from '../../assets/gasoline.svg';

import {
	Container,
	Brand,
	Model,
	Info,
	Div,
	Period,
	Price,
	CarImage,
} from './styles';

export interface CarData {
	brand: string;
	model: string;
	rent: {
		period: string;
		price: number;
	};
	fuel: 'energy' | 'gasoline';
	thumbnail: string;
}

interface Props {
	data: CarData;
}

export function CarDataCard({ data }: Props) {
	return (
		<Container>
			<Div>
				<Div>
					<Brand>{data.brand}</Brand>
					<Model>{data.model}</Model>
				</Div>

				<Info>
					<Div>
						<Period>{data.rent.period}</Period>
						<Price>{data.rent.price}</Price>
					</Div>
					{data.fuel === 'energy' ? (
						<Energy style={{ marginLeft: 24 }} />
					) : (
						<Gasoline style={{ marginLeft: 24 }} />
					)}
				</Info>
			</Div>

			<CarImage source={{ uri: data.thumbnail }} />
		</Container>
	);
}

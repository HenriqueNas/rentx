import React from 'react';

import { useAppNavigation } from '../../hooks/navigation';

import { CarProps } from '../../models/car';

import EnergySvg from '../../assets/energy.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import HybridSvg from '../../assets/hybrid.svg';

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

interface Props {
	data: CarProps;
}

export function CarDataCard({ data }: Props) {
	const navigation = useAppNavigation();

	function handleNavigate() {
		navigation.navigate('CarDetails', {
			data: data,
		});
	}

	const fuelMap = {
		gasoline: <GasolineSvg style={{ marginLeft: 24 }} />,
		electric: <EnergySvg style={{ marginLeft: 24 }} />,
		hybrid_motor: <HybridSvg style={{ marginLeft: 24 }} />,
	};

	return (
		<Container onPress={handleNavigate}>
			<Div>
				<Div>
					<Brand>{data.brand}</Brand>
					<Model>{data.name}</Model>
				</Div>

				<Info>
					<Div>
						<Period>period</Period>
						<Price>price</Price>
					</Div>
					{fuelMap[data.fuel_type]}
				</Info>
			</Div>

			<CarImage source={{ uri: data.thumbnail }} />
		</Container>
	);
}

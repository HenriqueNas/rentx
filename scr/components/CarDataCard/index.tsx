import React from 'react';

import { useAppNavigation } from '../../hooks/navigation';

import { ScheduleDTO } from '../../models/schedule';
import { CarDTO } from '../../models/car';

import EnergySvg from '../../assets/energy.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import HybridSvg from '../../assets/hybrid.svg';
import ArrowSvg from '../../assets/arrow.svg';

import {
	Container,
	Brand,
	Model,
	Info,
	Div,
	Period,
	Price,
	CarImage,
	PeriodLabel,
	RentalPeriod,
	DateLabel,
	RentalDates,
} from './styles';

interface Props {
	car?: CarDTO;
	schedule?: ScheduleDTO;
}

export function CarDataCard({ car, schedule }: Props) {
	const navigation = useAppNavigation();

	const carData: CarDTO = car || schedule.car;

	function handleNavigate() {
		navigation.navigate('CarDetails', {
			data: carData,
		});
	}

	const fuelMap = {
		gasoline: <GasolineSvg style={{ marginLeft: 24 }} />,
		electric: <EnergySvg style={{ marginLeft: 24 }} />,
		hybrid_motor: <HybridSvg style={{ marginLeft: 24 }} />,
	};

	return (
		<>
			<Container onPress={handleNavigate}>
				<Div>
					<Div>
						<Brand>{carData.brand}</Brand>
						<Model>{carData.name}</Model>
					</Div>

					<Info>
						<Div>
							<Period>{carData.rent.period}</Period>
							<Price>R$ {carData.rent.price}</Price>
						</Div>
						{fuelMap[carData.fuel_type]}
					</Info>
				</Div>

				<CarImage source={{ uri: carData.thumbnail }} />
			</Container>
			{schedule && (
				<RentalPeriod>
					<PeriodLabel>período</PeriodLabel>
					<RentalDates>
						<DateLabel>{schedule.startDate}</DateLabel>
						<ArrowSvg />
						<DateLabel>{schedule.endDate}</DateLabel>
					</RentalDates>
				</RentalPeriod>
			)}
		</>
	);
}

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { ScheduleDTO } from '../../models/schedule';
import * as api from '../../services/api';

import { Loading } from '../../components/Loading';
import { CarDataCard } from '../../components/CarDataCard';
import { GoBackButton } from '../../components/GoBackButton';

import {
	Container,
	Header,
	Title,
	Subtitle,
	CarsList,
	TotalRentalsWrapper,
	TotalRentalsLabel,
	TotalRentalsValue,
} from './styles';

export function RentedCars() {
	const [schedulesData, setSchedulesData] = useState<ScheduleDTO[]>(
		[] as ScheduleDTO[]
	);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			const schedules = await api.getRentedCars('1');
			setSchedulesData(schedules);
			setIsLoading(false);
		})();
	}, []);

	return (
		<Container>
			<Header>
				<StatusBar
					translucent
					barStyle="light-content"
					backgroundColor="transparent"
				/>
				<GoBackButton color="background_secondary" />

				<Title>Seus agendamentos,{'\n'}estão aqui.</Title>
				<Subtitle>Conforto, segurança e praticidade.</Subtitle>
			</Header>

			<TotalRentalsWrapper>
				<TotalRentalsLabel>Agendamentos feitos</TotalRentalsLabel>
				<TotalRentalsValue>{schedulesData.length}</TotalRentalsValue>
			</TotalRentalsWrapper>

			{isLoading ? (
				<Loading />
			) : (
				<CarsList
					data={schedulesData}
					keyExtractor={(item) =>
						item.car.id.concat(item.startDate).concat(item.endDate)
					}
					renderItem={({ item }) => <CarDataCard schedule={item} />}
				/>
			)}
		</Container>
	);
}

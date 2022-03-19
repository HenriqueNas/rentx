import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { CarDataCard } from '../../components/CarDataCard';
import { CarProps } from '../../models/car';
import * as api from '../../services/api';

import { Container, Header, TotalCars, CarsList } from './styles';

export function Home() {
	const [carsData, setCarsData] = useState<CarProps[]>([] as CarProps[]);

	useEffect(() => {
		(async () => {
			const cars = await api.getCars();
			setCarsData(cars);
		})();
	}, []);

	return (
		<Container>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<Header>
				<Logo height={RFValue(12)} width={RFValue(108)} />

				<TotalCars>12 carros</TotalCars>
			</Header>

			<CarsList
				data={carsData}
				keyExtractor={(item) => item.id}
				renderItem={(item) => <CarDataCard data={item.item} />}
			/>
		</Container>
	);
}

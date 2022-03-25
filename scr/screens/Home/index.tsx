import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import * as api from '../../services/api';
import { useAppNavigation } from '../../hooks/navigation';

import { CarDataCard } from '../../components/CarDataCard';
import { CarDTO } from '../../models/car';

import Logo from '../../assets/logo.svg';

import {
	Container,
	Header,
	TotalCars,
	CarsList,
	RentedCars,
	CarIcon,
} from './styles';

export function Home() {
	const navigation = useAppNavigation();

	const [carsData, setCarsData] = useState<CarDTO[]>([] as CarDTO[]);

	function handleOpenRentedCars() {
		navigation.navigate('RentedCars');
	}

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
				renderItem={(item) => <CarDataCard car={item.item} />}
			/>

			<RentedCars onPress={handleOpenRentedCars}>
				<CarIcon />
			</RentedCars>
		</Container>
	);
}

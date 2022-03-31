import React, { useEffect, useState } from 'react';
import { StatusBar, BackHandler } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { CarDTO } from '../../models/car';
import * as api from '../../services/api';

import { useAppNavigation } from '../../hooks/navigation';

import { Loading } from '../../components/Loading';
import { CarDataCard } from '../../components/CarDataCard';
import { FloatButton } from '../../components/FloatButton';

import Logo from '../../assets/logo.svg';

import { Container, Header, TotalCars, CarsList } from './styles';

export function Home() {
	const navigation = useAppNavigation();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [carsData, setCarsData] = useState<CarDTO[]>([] as CarDTO[]);

	function handleOpenRentedCars() {
		navigation.navigate('RentedCars');
	}

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => true);

		(async () => {
			const cars = await api.getCars();
			setCarsData(cars);
			setIsLoading(false);
		})();
	});

	return (
		<Container>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<Header>
				<Logo height={RFValue(12)} width={RFValue(108)} />

				<TotalCars>
					{carsData.length > 0 && `Total de ${carsData.length} carros`}
				</TotalCars>
			</Header>

			{isLoading ? (
				<Loading />
			) : (
				<CarsList
					data={carsData}
					keyExtractor={({ id }) => id}
					renderItem={({ item }) => <CarDataCard car={item} />}
				/>
			)}

			<FloatButton onPress={handleOpenRentedCars} />
		</Container>
	);
}

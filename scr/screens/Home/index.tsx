import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { CarData, CarDetailsCard } from '../../components/CarDetailsCard';

import { Container, Header, TotalCars } from './styles';

export function Home() {
	const dataCar: CarData = {
		brand: 'audi',
		model: 'RS 5 Coupé',
		fuel: 'energy',
		rent: {
			period: 'ao dia',
			price: 120,
		},
		thumbnail:
			'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-450x299.png',
	};

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

			<CarDetailsCard data={dataCar} />
		</Container>
	);
}
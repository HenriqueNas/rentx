import React from 'react';

import { CarData } from '../../components/CarDataCard';
import { GoBackButton } from '../../components/GoBackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Optinal } from '../../components/Optinal';

import Speed from '../../assets/speed.svg';
import Acceleration from '../../assets/acceleration.svg';
import Force from '../../assets/force.svg';
import Gasoline from '../../assets/gasoline.svg';
import Exchange from '../../assets/exchange.svg';
import People from '../../assets/people.svg';

import {
	Container,
	Header,
	Details,
	Info,
	Div,
	Brand,
	Model,
	Period,
	Price,
	OptionalGrid,
	Description,
} from './styles';

export function CarDetails() {
	const data: CarData = {
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
	const slids = [
		'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-450x299.png',
		// 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-450x299.png',
		// 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-450x299.png',
	];

	return (
		<Container>
			<Header>
				<GoBackButton />
			</Header>

			<ImageSlider imagesUrl={slids} />

			<Details>
				<Info>
					<Div>
						<Brand>{data.brand}</Brand>
						<Model>{data.model}</Model>
					</Div>

					<Div>
						<Period>{data.rent.period}</Period>
						<Price>R$ {data.rent.price}</Price>
					</Div>
				</Info>

				<OptionalGrid>
					<Optinal name="380km/h" icon={Speed} />
					<Optinal name="3.2s" icon={Acceleration} />
					<Optinal name="800 HP" icon={Force} />
					<Optinal name="Gasolina" icon={Gasoline} />
					<Optinal name="Auto" icon={Exchange} />
					<Optinal name="2 pessoas" icon={People} />
				</OptionalGrid>

				<Description>
					Este é automóvel desportivo. Surgiu do lendário touro de lide
					indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
					para quem gosta de acelerar.
				</Description>
			</Details>
		</Container>
	);
}

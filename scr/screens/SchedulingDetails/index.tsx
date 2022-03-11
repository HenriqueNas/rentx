import React from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';

import { useAppNavigation } from '../../hooks/navigation';
import { AppStackParams } from '../../routes/routes';

import { Button } from '../../components/Button';
import { Optinal } from '../../components/Optinal';
import { ImageSlider } from '../../components/ImageSlider';
import { GoBackButton } from '../../components/GoBackButton';

import Speed from '../../assets/speed.svg';
import Force from '../../assets/force.svg';
import People from '../../assets/people.svg';
import Gasoline from '../../assets/gasoline.svg';
import Exchange from '../../assets/exchange.svg';
import Acceleration from '../../assets/acceleration.svg';

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
	RentalPeriod,
	IconWrapper,
	CalendarIcon,
	ArrowIcon,
	DateInfo,
	DateLabel,
	DateValue,
	RentalTotal,
	TotalLabel,
	TotalMath,
	TotalResult,
	Footer,
	TotalInfo,
} from './styles';

type SchedulingDetailsRouteProps = RouteProp<
	AppStackParams,
	'SchedulingDetails'
>;

export function SchedulingDetails() {
	const {
		params: { data },
	} = useRoute<SchedulingDetailsRouteProps>();
	const navigation = useAppNavigation();

	const slids = [
		'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-450x299.png',
		// 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-450x299.png',
		// 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-450x299.png',
	];

	function handleNavigate() {
		navigation.navigate('Home');
	}

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

				<RentalPeriod>
					<IconWrapper>
						<CalendarIcon />
					</IconWrapper>
					<DateInfo>
						<DateLabel>DE</DateLabel>
						<DateValue>18/06/2021</DateValue>
					</DateInfo>
					<ArrowIcon />
					<DateInfo>
						<DateLabel>ATÉ</DateLabel>
						<DateValue>22/06/2021</DateValue>
					</DateInfo>
				</RentalPeriod>

				<RentalTotal>
					<TotalInfo>
						<TotalLabel>TOTAL</TotalLabel>
						<TotalMath>R$ 580 x3 diárias</TotalMath>
					</TotalInfo>
					<TotalResult>R$ 2.900</TotalResult>
				</RentalTotal>

				<OptionalGrid>
					<Optinal name="380km/h" icon={Speed} />
					<Optinal name="3.2s" icon={Acceleration} />
					<Optinal name="800 HP" icon={Force} />
					<Optinal name="Gasolina" icon={Gasoline} />
					<Optinal name="Auto" icon={Exchange} />
					<Optinal name="2 pessoas" icon={People} />
				</OptionalGrid>
			</Details>

			<Footer>
				<Button title="Alugar Agora" onPress={handleNavigate} color="success" />
			</Footer>
		</Container>
	);
}

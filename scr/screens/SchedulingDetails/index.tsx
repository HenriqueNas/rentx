import React from 'react';
import { StatusBar } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';

import { useAppNavigation } from '../../hooks/navigation';
import { AppStackParams } from '../../routes/routes';

import { Button } from '../../components/Button';
import { Optinal } from '../../components/Optinal';
import { ImageSlider } from '../../components/ImageSlider';
import { GoBackButton } from '../../components/GoBackButton';

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
import { accessoriesIconMap } from '../CarDetails';

type SchedulingDetailsRouteProps = RouteProp<
	AppStackParams,
	'SchedulingDetails'
>;

export function SchedulingDetails() {
	const {
		params: { carData, rentalInfo },
	} = useRoute<SchedulingDetailsRouteProps>();
	const navigation = useAppNavigation();

	function handleNavigate() {
		navigation.navigate('SchedulingComplete');
	}

	return (
		<Container>
			<StatusBar barStyle="dark-content" />
			<Header>
				<GoBackButton />
			</Header>

			<ImageSlider imagesUrl={[carData.photos[0]]} />

			<Details>
				<Info>
					<Div>
						<Brand>{carData.brand}</Brand>
						<Model>{carData.name}</Model>
					</Div>

					<Div>
						<Period>{carData.rent.period}</Period>
						<Price>R$ {carData.rent.price}</Price>
					</Div>
				</Info>

				<RentalPeriod>
					<IconWrapper>
						<CalendarIcon />
					</IconWrapper>
					<DateInfo>
						<DateLabel>DE</DateLabel>
						<DateValue>{rentalInfo.start}</DateValue>
					</DateInfo>
					<ArrowIcon />
					<DateInfo>
						<DateLabel>ATÉ</DateLabel>
						<DateValue>{rentalInfo.end}</DateValue>
					</DateInfo>
				</RentalPeriod>

				<RentalTotal>
					<TotalInfo>
						<TotalLabel>TOTAL</TotalLabel>
						<TotalMath>
							R$ {carData.rent.price} x{rentalInfo.totalDays} diárias
						</TotalMath>
					</TotalInfo>
					<TotalResult>
						R$ {carData.rent.price * rentalInfo.totalDays}
					</TotalResult>
				</RentalTotal>

				<OptionalGrid>
					{carData.accessories.map((accessory) => (
						<Optinal
							key={accessory.name}
							name={accessory.name}
							icon={accessoriesIconMap[accessory.type]}
						/>
					))}
				</OptionalGrid>
			</Details>

			<Footer>
				<Button title="Alugar Agora" onPress={handleNavigate} color="success" />
			</Footer>
		</Container>
	);
}

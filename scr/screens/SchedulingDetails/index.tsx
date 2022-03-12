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
		params: { data },
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

			<ImageSlider imagesUrl={[data.photos[0]]} />

			<Details>
				<Info>
					<Div>
						<Brand>{data.brand}</Brand>
						<Model>{data.name}</Model>
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
					{data.accessories.map((accessory) => (
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

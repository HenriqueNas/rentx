import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { addDays, eachDayOfInterval, format, parse } from 'date-fns';

import * as api from '../../services/api';

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
		params: { carData, rentInfo },
	} = useRoute<SchedulingDetailsRouteProps>();
	const navigation = useAppNavigation();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function handleSubmit() {
		setIsLoading(true);
		try {
			const starDate = parse(rentInfo.start, 'dd/MM/yyyy', new Date());
			const endDate = parse(rentInfo.end, 'dd/MM/yyyy', new Date());

			const rentDays = eachDayOfInterval({
				start: starDate,
				end: endDate,
			});

			const formattedDays = rentDays.map((date) => format(date, 'yyyy-MM-dd'));

			await api.scheduleCar(carData.id, formattedDays);
			setIsLoading(false);

			navigation.navigate('SchedulingComplete');
		} catch {
			Alert.alert(
				'Ocorreu algum erro no agendamento.\nTente novamente mais tarde!'
			);
			setIsLoading(false);
		}
	}

	return (
		<Container>
			<StatusBar barStyle="dark-content" />
			<Header>
				<GoBackButton />
			</Header>

			<ImageSlider imagesUrl={carData.photos} />

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
						<DateValue>{rentInfo.start}</DateValue>
					</DateInfo>
					<ArrowIcon />
					<DateInfo>
						<DateLabel>ATÉ</DateLabel>
						<DateValue>{rentInfo.end}</DateValue>
					</DateInfo>
				</RentalPeriod>

				<RentalTotal>
					<TotalInfo>
						<TotalLabel>TOTAL</TotalLabel>
						<TotalMath>
							R$ {carData.rent.price} x{rentInfo.totalDays} diárias
						</TotalMath>
					</TotalInfo>
					<TotalResult>
						R$ {carData.rent.price * rentInfo.totalDays}
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
				<Button
					isLoading={isLoading}
					title="Alugar Agora"
					onPress={handleSubmit}
					color="success"
				/>
			</Footer>
		</Container>
	);
}

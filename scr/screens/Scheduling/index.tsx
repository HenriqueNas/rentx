import React, { useEffect, useState } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import * as api from '../../services/api';

import { useAppNavigation } from '../../hooks/navigation';
import { AppStackParams } from '../../routes/routes';

import { GoBackButton } from '../../components/GoBackButton';
import { Button } from '../../components/Button';
import {
	Calendar,
	DateProps,
	MarkedDateProps,
} from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';

import {
	Container,
	Header,
	Title,
	RentalPeriod,
	DateInfo,
	DateLabel,
	DateValue,
	Footer,
	Content,
} from './styles';
import { generateInterval } from '../../components/Calendar/utils';
import { addDays, format } from 'date-fns';

type SchedulingRouteProps = RouteProp<AppStackParams, 'Scheduling'>;

const height = Dimensions.get('screen').height;

export function Scheduling() {
	const {
		params: { data },
	} = useRoute<SchedulingRouteProps>();
	const navigation = useAppNavigation();

	const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
		{} as MarkedDateProps
	);
	const [lastSelectedDate, setLastSelectedDate] = useState<DateProps>(
		{} as DateProps
	);

	const [startDate, setStartDate] = useState<string>();
	const [endDate, setEndDate] = useState<string>();

	const [disabledDates, setDisabledDates] = useState<MarkedDateProps>();

	function getTotalRentDays() {
		return Object.keys(markedDates).length;
	}

	function handleNavigate() {
		navigation.navigate('SchedulingDetails', {
			carData: data,
			rentInfo: {
				start: startDate,
				end: endDate,
				totalDays: getTotalRentDays(),
			},
		});
	}

	function handleChangeDate(newDate: DateProps) {
		let start = lastSelectedDate.timestamp ? lastSelectedDate : newDate;
		let end = newDate;

		if (start.timestamp > end.timestamp) {
			end = start;
			start = newDate;
		}

		const startDate = addDays(new Date(start.timestamp), 1);
		const endDate = addDays(new Date(end.timestamp), 1);

		setStartDate(format(startDate, 'dd/MM/yyyy'));
		setEndDate(format(endDate, 'dd/MM/yyyy'));

		setLastSelectedDate(end);

		const interval = generateInterval(start, end);
		setMarkedDates(interval);
	}

	const title =
		height > 800
			? 'Escolha uma \ndata de início e \nfim do aluguel'
			: 'Escolha uma data de início \ne fim do aluguel';

	useEffect(() => {
		(async () => {
			const days = await api.getUnavailableDates(data.id);

			const unavailableDates: MarkedDateProps = Object.fromEntries(
				days.map((date) => [date, { disabled: true }])
			);

			setDisabledDates(unavailableDates);
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

				<Title>{title}</Title>

				<RentalPeriod>
					<DateInfo>
						<DateLabel>DE</DateLabel>
						<DateValue>{startDate}</DateValue>
					</DateInfo>
					<ArrowSvg />
					<DateInfo>
						<DateLabel>ATÉ</DateLabel>
						<DateValue>{endDate}</DateValue>
					</DateInfo>
				</RentalPeriod>
			</Header>

			<Content>
				<Calendar
					markedDates={{ ...disabledDates, ...markedDates }}
					onDayPress={handleChangeDate}
				/>
			</Content>

			<Footer>
				<Button
					title="Confirmar"
					onPress={handleNavigate}
					disabled={getTotalRentDays() <= 0}
				/>
			</Footer>
		</Container>
	);
}

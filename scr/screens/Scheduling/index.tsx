import React from 'react';
import { Dimensions, StatusBar } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';

import { useAppNavigation } from '../../hooks/navigation';
import { AppStackParams } from '../../routes/routes';

import { GoBackButton } from '../../components/GoBackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

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

type SchedulingRouteProps = RouteProp<AppStackParams, 'Scheduling'>;

const height = Dimensions.get('screen').height;

export function Scheduling() {
	const {
		params: { data },
	} = useRoute<SchedulingRouteProps>();
	const navigation = useAppNavigation();

	function handleNavigate() {
		navigation.navigate('SchedulingDetails', {
			data: data,
		});
	}

	const title =
		height > 800
			? 'Escolha uma \ndata de início e \nfim do aluguel'
			: 'Escolha uma data de início \ne fim do aluguel';

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
						<DateValue></DateValue>
					</DateInfo>
					<ArrowSvg />
					<DateInfo>
						<DateLabel>ATÉ</DateLabel>
						<DateValue>18/06/2021</DateValue>
					</DateInfo>
				</RentalPeriod>
			</Header>

			<Content>
				<Calendar />
			</Content>

			<Footer>
				<Button title="Confirmar" onPress={handleNavigate} />
			</Footer>
		</Container>
	);
}

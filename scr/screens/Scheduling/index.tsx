import React from 'react';

import { GoBackButton } from '../../components/GoBackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
	Container,
	Header,
	Title,
	RentalPeriod,
	DateInfo,
	DateLabel,
	DateValue,
} from './styles';
import { StatusBar } from 'react-native';

export function Scheduling() {
	return (
		<Container>
			<Header>
				<StatusBar
					translucent
					barStyle="light-content"
					backgroundColor="transparent"
				/>
				<GoBackButton color="background_secondary" />

				<Title>
					Escolha uma {'\n'}
					data de início e {'\n'}
					fim do aluguel
				</Title>

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
		</Container>
	);
}

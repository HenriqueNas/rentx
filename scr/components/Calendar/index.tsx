import React from 'react';

import {
	Calendar as CustomCalendar,
	LocaleConfig,
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
	monthNames: [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	],
	monthNamesShort: [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	],
	dayNames: [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	],
	dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
	today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
	const theme = useTheme();

	return (
		<CustomCalendar
			minDate={new Date().toString()}
			firstDay={1}
			renderArrow={(direction) => (
				<Feather
					size={24}
					color={theme.color.text}
					name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
				/>
			)}
			headerStyle={{
				backgroundColor: theme.color.background_secondary,
				borderBottomWidth: 0.6,
				borderBottomColor: theme.color.text_details,
				paddingBottom: 10,
				marginBottom: 10,
			}}
			theme={{
				textDayFontFamily: theme.fonts.primary_regular,
				textDayHeaderFontFamily: theme.fonts.primary_medium,
				textDayHeaderFontSize: 10,
				todayTextColor: theme.color.main,
				monthTextColor: theme.color.title,
				textMonthFontFamily: theme.fonts.secondary_medium,
				textMonthFontSize: 20,
				arrowStyle: {
					marginHorizontal: -15,
				},
			}}
		/>
	);
}

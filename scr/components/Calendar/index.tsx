import React, { useState } from 'react';

import {
	Calendar as CustomCalendar,
	DateData,
	LocaleConfig,
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { ptBR } from './localeCondig';
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export interface MarkedDateProps {
	[key: string]: MarkingProps;
}

export type DateProps = DateData;

interface CalendarProps {
	markedDates: MarkedDateProps;
	onDayPress: (date: DateProps) => void;
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
	const theme = useTheme();

	return (
		<CustomCalendar
			enableSwipeMonths
			firstDay={1}
			minDate={new Date().toString()}
			onDayPress={onDayPress}
			renderArrow={(direction) => (
				<Feather
					size={RFValue(24)}
					color={theme.color.text}
					name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
				/>
			)}
			headerStyle={{
				backgroundColor: theme.color.background_secondary,
				borderBottomWidth: 0.6,
				borderBottomColor: theme.color.text_details,
				paddingBottom: 6,
			}}
			theme={{
				textDayFontFamily: theme.fonts.primary_regular,
				textDayHeaderFontFamily: theme.fonts.primary_medium,
				textDayHeaderFontSize: RFValue(10),
				todayTextColor: theme.color.main,
				monthTextColor: theme.color.title,
				textMonthFontFamily: theme.fonts.secondary_medium,
				textMonthFontSize: RFValue(20),
				arrowStyle: {
					marginHorizontal: -15,
				},
			}}
			markingType="period"
			markedDates={markedDates}
		/>
	);
}
